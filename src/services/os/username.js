import { userInfo } from "node:os";

export const getUserName = () => {
  console.log(userInfo().username);
};
