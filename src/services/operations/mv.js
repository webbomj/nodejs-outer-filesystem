import fs from "node:fs/promises";
import { createReadStream, createWriteStream, rm } from "node:fs";
import path from "node:path";

export const mv = async (pathToFile, pathToNewDir) => {
  try {
    await fs.access(pathToFile);
    await fs.access(pathToNewDir);
  } catch (e) {
    console.log("Invalid input", [e]);
    return;
  }

  try {
    const newPathToFile = path.join(pathToNewDir, path.parse(pathToFile).base);
    fs.writeFile(newPathToFile, "", (err) => {
      if (err) {
        console.log("Invalid input");
        return;
      }
    });
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(newPathToFile);
    rs.pipe(ws);
    await fs.rm(pathToFile);
  } catch (e) {
    console.log("Operation failed");
  }
};
