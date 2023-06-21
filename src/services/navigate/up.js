import process from "node:process";
import path from "node:path";

export const up = () => {
  const currentPath = path.parse(process.cwd());
  const root = currentPath.root;
  const dir = currentPath.dir;
  if (root === process.cwd()) {
    console.log("Invalid input");
  }
  try {
    process.chdir(dir);
  } catch (e) {
    console.log("Operation failed");
  }
};
