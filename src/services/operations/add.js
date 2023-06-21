import process from "node:process";
import fs from "node:fs/promises";
import path from "node:path";

export const add = async (pathToFile) => {
  const isFilePath = !!path.extname(pathToFile);
  if (!isFilePath) {
    console.log("Invalid input");
    return;
  }

  const filename = path.join(process.cwd(), pathToFile);

  let hasFile = false;
  try {
    await fs.access(filename, constants.W_OK);
    hasFile = true;
  } catch (e) {}

  if (hasFile) {
    console.log("Operation failed");
    return;
  }

  await fs.writeFile(filename, "");
};
