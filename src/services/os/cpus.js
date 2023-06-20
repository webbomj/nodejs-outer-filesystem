import { cpus } from "node:os";

export const getCPUS = () => {
  console.log(cpus());
};
