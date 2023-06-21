import fs from "node:fs";

export const cp = async (pathToFile, newPathToFile) => {
  fs.access(pathToFile, fs.constants.R_OK, (err) => {
    if (err) {
      console.log("Invalid input");
      return;
    } else {
      fs.writeFile(newPathToFile, "", (err) => {
        if (err) {
          console.log("Invalid input");
          return;
        }
      });
    }
  });

  try {
    const rs = fs.createReadStream(pathToFile);
    const ws = fs.createWriteStream(newPathToFile);
    rs.pipe(ws);
  } catch (e) {
    console.log("Operation failed", [e]);
  }
};
