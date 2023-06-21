import fs from "node:fs/promises";
import path from "node:path";

export const rn = async (pathToFile, newFilename) => {
  try {
    await fs.access(pathToFile);
  } catch {
    console.log("Invalid input");
  }

  const isFilePath = !!path.extname(newFilename);
  if (!isFilePath) {
    console.log("Invalid input");
    return;
  }

  const newPathToFile = path.join(path.parse(pathToFile).dir, newFilename);
  try {
    await fs.rename(pathToFile, newPathToFile);
  } catch (e) {
    console.log("Operation failed");
  }
};
