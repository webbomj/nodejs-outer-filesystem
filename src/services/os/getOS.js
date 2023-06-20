import { getEOL } from "./eol.js";
import { getCPUS } from "./cpus.js";
import { getHomedir } from "./homedir.js";
import { getArch } from "./architecture.js";
import { getUserName } from "./username.js";

export const getOS = (param) => {
  switch (param.trim()) {
    case "--EOL":
      getEOL();
      break;
    case "--cpus":
      getCPUS();
      break;
    case "--homedir":
      getHomedir();
      break;
    case "--architecture":
      getArch();
      break;
    case "--username":
      getUserName();
      break;
    default:
      break;
  }
};
