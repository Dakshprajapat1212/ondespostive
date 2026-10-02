import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const assetsDirectory = path.join(process.cwd(), "src", "assets");
const sourceFiles = (await readdir(assetsDirectory)).filter((file) => /\.(png|jpe?g)$/i.test(file));
let originalBytes = 0;
let optimizedBytes = 0;

for (const file of sourceFiles) {
  const inputPath = path.join(assetsDirectory, file);
  const outputPath = path.join(assetsDirectory, file.replace(/\.(png|jpe?g)$/i, ".webp"));

  originalBytes += (await stat(inputPath)).size;
  await sharp(inputPath)
    .rotate()
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(outputPath);
  optimizedBytes += (await stat(outputPath)).size;
}

console.log(`Converted ${sourceFiles.length} images: ${(originalBytes / 1048576).toFixed(1)} MB -> ${(optimizedBytes / 1048576).toFixed(1)} MB`);
