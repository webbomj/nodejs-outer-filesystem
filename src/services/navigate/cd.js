import process from "node:process";
import path from "node:path";

export const cd = (pathToDirectory) => {
  try {
    if (pathToDirectory.includes(":")) {
      process.chdir(pathToDirectory);
    } else {
      const currentDir = path.join(process.cwd(), pathToDirectory);
      process.chdir(currentDir);
    }
  } catch (e) {
    console.log("Operation failed");
  }
};
