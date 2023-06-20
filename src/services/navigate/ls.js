import process from "node:process";
import fs from "node:fs/promises";

export const ls = async () => {
  try {
    const arrDir = await fs.readdir(process.cwd(), { withFileTypes: true });
    const newArrDir = [...arrDir]
      .map((dirent) => ({
        name: dirent.name,
        type: dirent.isDirectory() ? "directory" : "file",
      }))
      .sort((a, b) => b.name - a.name)
      .sort((a, b) => (b.type > a.type ? -1 : 1));
    console.table(newArrDir);
  } catch (e) {
    console.log("Operation failed");
  }
};
