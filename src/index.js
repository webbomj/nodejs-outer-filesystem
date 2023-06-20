import process, { stdin as input, stdout as output } from "node:process";
import os from "node:os";
import readline from "readline/promises";

import { getEOL } from "./services/os/eol.js";

import { getUserNameByArg } from "./helpers/getUserNameByArg.js";
import { getCPUS } from "./services/os/cpus.js";
import { getHomedir } from "./services/os/homedir.js";
import { getArch } from "./services/os/architecture.js";

const userName = getUserNameByArg(process.argv[2]);
console.log(`Welcome to the File Manager, ${userName}`);

const rl = readline.createInterface({ input, output });
rl.write(process.chdir(os.homedir()));
console.log(`You are currently in ${process.cwd()}`);

//up, cd,  ls
//cat, add , rn, cp, mv, rm
//EOL, cpus, homedir, username, architecture
//hash
//compress, decompress

rl.on("line", (line) => {
  switch (line.trim()) {
    case "os --EOL":
      getEOL();
      break;
    case "os --cpus":
      getCPUS();
      break;
    case "os --homedir":
      getHomedir();
      break;
    case "os --architecture":
      getArch();
      break;

    default:
      break;
  }
  console.log(`You are currently in ${process.cwd()}`);
});

rl.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  rl.close();
});
