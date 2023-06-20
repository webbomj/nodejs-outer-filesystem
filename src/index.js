import process, { stdin as input, stdout as output } from "node:process";
import os from "node:os";
import readline from "readline/promises";

import { getUserNameByArg } from "./helpers/getUserNameByArg.js";
import { getHash } from "./services/hash/hash.js";
import { getOS } from "./services/os/getOS.js";

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
    case "os":
      getOS(arg1);
      break;
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
