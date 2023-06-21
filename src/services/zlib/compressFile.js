import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

export const compressFile = async (fileToCompressPath, fileCompressedPath) => {
  fs.access(fileToCompressPath, (e) => {
    if (e) {
      console.log("Invalid input");
    }
  });

  try {
    const newFilename = path.join(
      fileCompressedPath,
      `${path.parse(fileToCompressPath).base}.gz`
    );
    const readbleStream = fs.createReadStream(fileToCompressPath);
    const writableStream = fs.createWriteStream(newFilename);
    const brotliPipe = zlib.createBrotliCompress();
    readbleStream.pipe(brotliPipe).pipe(writableStream);
  } catch (e) {
    console.log("Operation failed");
  }
};
