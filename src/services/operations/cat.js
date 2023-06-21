import process from "node:process";
import { access, constants, open } from "node:fs/promises";
import path from "node:path";

export const cat = async (pathToFile) => {
  const isFilePath = !!path.extname(pathToFile);
  if (!isFilePath) {
    console.log("Invalid input");
    return;
  }
  try {
    await access(pathToFile, constants.R_OK);
  } catch (e) {
    console.log("Invalid input");
    return;
  }

  try {
    const rs = (await open(pathToFile)).createReadStream();
    rs.pipe(process.stdout);
  } catch (e) {
    console.log("Operation failed");
  }
};
