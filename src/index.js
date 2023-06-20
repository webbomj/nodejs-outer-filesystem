import process, { stdin as input, stdout as output } from "node:process";
import os from "node:os";
import readline from "readline/promises";

import { getUserNameByArg } from "./helpers/getUserNameByArg.js";

const userName = getUserNameByArg(process.argv[2]);
console.log(`Welcome to the File Manager, ${userName}`);
console.log("You are currently in path_to_working_directory");
const rl = readline.createInterface({ input, output });

//up, cd,  ls
//cat, add , rn, cp, mv, rm
//EOL, cpus, homedir, username, architecture
//hash
//compress, decompress

const homedir = os.homedir();

rl.on("line", (line) => {
  console.log(line);
  console.log("You are currently in path_to_working_directory");
});

rl.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  rl.close();
});
