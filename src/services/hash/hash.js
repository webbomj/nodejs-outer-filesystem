import crypto from "node:crypto";
import fs, { constants } from "node:fs/promises";

export const getHash = async (pathToFile) => {
  try {
    await fs.access(pathToFile, constants.R_OK);
  } catch (e) {
    console.log("Operation failed");
  }

  try {
    const file = await fs.readFile(pathToFile);
    const hash = crypto
      .createHash("sha256")
      .update(file.toString())
      .digest("hex");
    console.log(hash);
  } catch (e) {
    console.log("Invalid input");
  }
};
