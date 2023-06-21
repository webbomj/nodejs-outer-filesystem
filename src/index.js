import process, { stdin as input, stdout as output } from "node:process";
import os from "node:os";
import readline from "readline/promises";

import { getUserNameByArg } from "./helpers/getUserNameByArg.js";
import { getHash } from "./services/hash/hash.js";
import { getOS } from "./services/os/getOS.js";
import { compressFile } from "./services/zlib/compressFile.js";
import { decompressFile } from "./services/zlib/decompressFile.js";
import { up } from "./services/navigate/up.js";
import { cd } from "./services/navigate/cd.js";
import { ls } from "./services/navigate/ls.js";
import { cat } from "./services/operations/cat.js";

const userName = getUserNameByArg(process.argv[2]);
console.log(`Welcome to the File Manager, ${userName}`);

const rl = readline.createInterface({ input, output });
rl.write(process.chdir(os.homedir()));
console.log(`You are currently in ${process.cwd()}`);

//up, cd,  ls
//cat, add , rn, cp, mv, rm

rl.on("line", async (line) => {
  const trimLine = line.trim();
  const [cmd, arg1, arg2] = trimLine.split(" ");

  switch (cmd) {
    case "up":
      up();
      break;
    case "cd":
      cd(arg1);
      break;
    case "ls":
      await ls();
      break;
    case "cat":
      await cat(arg1);
      break;
    case "os":
      getOS(arg1);
      break;
    case "hash":
      await getHash(arg1);
      break;
    case "compress":
      await compressFile(arg1, arg2);
      break;
    case "decompress":
      await decompressFile(arg1, arg2);
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
