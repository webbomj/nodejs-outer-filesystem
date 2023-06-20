import fs from "node:fs";
import zlib from "node:zlib";

export const decompressFile = async (
  fileToDecompressPath,
  fileDecompressedPath
) => {
  try {
    const readbleStream = fs.createReadStream(fileToDecompressPath);
    const writableStream = fs.createWriteStream(fileDecompressedPath);
    const brotliPipe = zlib.createBrotliDecompress();
    readbleStream.pipe(brotliPipe).pipe(writableStream);
  } catch (e) {
    console.log("Operation failed");
  }
};
