import fs from "node:fs";
import path from "node:path";

export const cp = async (pathToFile, newPathToFile) => {
  const newFilePath = path.join(newPathToFile, path.parse(pathToFile).base);
  try {
    fs.access(pathToFile, fs.constants.R_OK, (err) => {
      if (err) {
        console.log("Invalid input");
        return;
      } else {
        fs.writeFile(newFilePath, "", (err) => {
          if (err) {
            console.log("Invalid input");
            return;
          }
        });
      }
    });
  } catch (e) {
    console.log("Invalid input");
  }

  try {
    const rs = fs.createReadStream(pathToFile);
    const ws = fs.createWriteStream(newFilePath);
    rs.pipe(ws);
  } catch (e) {
    console.log("Operation failed");
  }
};
