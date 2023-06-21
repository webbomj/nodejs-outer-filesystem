import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

export const decompressFile = async (
  fileToDecompressPath,
  fileDecompressedPath
) => {
  fs.access(fileToDecompressPath, (e) => {
    if (e) {
      console.log("Invalid input");
    }
  });
  try {
    const newFilename = path.join(
      fileDecompressedPath,
      `${path.parse(fileToDecompressPath).base.replace(".gz", "")}`
    );
    const readbleStream = fs.createReadStream(fileToDecompressPath);
    const writableStream = fs.createWriteStream(newFilename);
    const brotliPipe = zlib.createBrotliDecompress();
    readbleStream.pipe(brotliPipe).pipe(writableStream);
  } catch (e) {
    console.log("Operation failed");
  }
};
