import fs from "node:fs/promises";

export const rm = async (pathToFile) => {
  try {
    await fs.access(pathToFile);
  } catch (e) {
    console.log("Invalid input");
    return;
  }

  try {
    await fs.rm(pathToFile);
  } catch (e) {
    console.log("Operation failed");
  }
};
