export const getUserNameByArg = (arg) => {
  let userName = "anonymous";

  if (/--username=.+/g.test(arg)) {
    userName = arg.replace("--username=", "");
  }

  return userName;
};
