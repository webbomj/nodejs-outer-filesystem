import process, { stdin as input, stdout as output } from "node:process";
import os from "node:os";
import readline from "readline/promises";

import { getEOL } from "./services/os/eol.js";

import { getUserNameByArg } from "./helpers/getUserNameByArg.js";
import { getCPUS } from "./services/os/cpus.js";
import { getHomedir } from "./services/os/homedir.js";
import { getArch } from "./services/os/architecture.js";
import { getUserName } from "./services/os/username.js";
import { getHash } from "./services/hash/hash.js";

const userName = getUserNameByArg(process.argv[2]);
console.log(`Welcome to the File Manager, ${userName}`);

const rl = readline.createInterface({ input, output });
rl.write(process.chdir(os.homedir()));
console.log(`You are currently in ${process.cwd()}`);

//up, cd,  ls
//cat, add , rn, cp, mv, rm
//hash
//compress, decompress

rl.on("line", async (line) => {
  const trimLine = line.trim();
  const [cmd, arg1, arg2] = trimLine.split(" ");

  console.log(trimLine, cmd, arg1, arg2);
  switch (cmd) {
    // case "os --EOL":
    case "os":
    //   getEOL();
    //   break;
    // case "os --cpus":
    //   getCPUS();
    //   break;
    // case "os --homedir":
    //   getHomedir();
    //   break;
    // case "os --architecture":
    //   getArch();
    //   break;
    // case "os --username":
    //   getUserName();
    //   break;
    case "hash":
      await getHash(arg1);
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
