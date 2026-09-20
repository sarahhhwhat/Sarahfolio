/**
 * One-off utility: renders page 1 of local certificate PDFs to PNG
 * for use in /public/assets/certificates/. Not part of the app build.
 *
 * Uses @napi-rs/canvas (the same canvas backend pdfjs-dist's Node
 * factory uses) so pdf.js internal canvases interop with our target.
 *
 * Usage: node scripts/render-certs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { createCanvas } from '@napi-rs/canvas';

// Node 24 ships createImageBitmap/ImageDecoder/OffscreenCanvas; pdf.js would
// then hand ImageBitmaps to node-canvas-style canvases, which cannot
// drawImage() them. Remove them BEFORE importing pdf.js so pdf.js falls back
// to its pure-JS decoders and the putImageData() code path.
delete globalThis.createImageBitmap;
delete globalThis.ImageDecoder;
delete globalThis.OffscreenCanvas;
const getDocument = (await import('pdfjs-dist/legacy/build/pdf.mjs')).getDocument;

const DOWNLOADS = 'C:/Users/fatim/Downloads';
const OUT_DIR = path.resolve('public/assets/certificates');

const files = [
  ['ai fluency anthropic certficate.pdf', 'ai-fluency-anthropic-2026.png'],
  ['claude 101 certificate.pdf', 'claude-101-anthropic-2026.png'],
  ['linkedin genai certificate.pdf', 'generative-ai-linkedin-2026.png'],
  ['ai fundamentals ibm certif.pdf', 'ai-fundamentals-ibm-2026.png'],
  ['forage cba certifcate.pdf', 'tech-explorer-forage-2026.png'],
];

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [input, output] of files) {
  const src = path.join(DOWNLOADS, input);
  const dest = path.join(OUT_DIR, output);

  const data = new Uint8Array(fs.readFileSync(src));
  const loadingTask = getDocument({ data, useSystemFonts: true, isOffscreenCanvasSupported: false });
  const doc = await loadingTask.promise;
  const page = await doc.getPage(1);

  const base = page.getViewport({ scale: 1 });
  const scale = Math.min(3, 1800 / base.width);
  const viewport = page.getViewport({ scale });

  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: ctx, viewport, canvas }).promise;

  const rendered = await canvas.encode('png');
  await sharp(rendered, { density: 300 })
    .png({ compressionLevel: 9 })
    .toFile(dest);

  const { width, height } = await sharp(dest).metadata();
  const kb = Math.round(fs.statSync(dest).size / 1024);
  console.log(`✓ ${input}  ->  public/assets/certificates/${output}  (${width}x${height}, ${kb} KB)`);

  await loadingTask.destroy();
}
console.log('Done.');
