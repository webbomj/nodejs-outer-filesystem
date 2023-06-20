import fs from "node:fs";
import zlib from "node:zlib";

export const compressFile = async (fileToCompressPath, fileCompressedPath) => {
  try {
    const readbleStream = fs.createReadStream(fileToCompressPath);
    const writableStream = fs.createWriteStream(fileCompressedPath);
    const brotliPipe = zlib.createBrotliCompress();
    readbleStream.pipe(brotliPipe).pipe(writableStream);
  } catch (e) {
    console.log("Operation failed");
  }
};
