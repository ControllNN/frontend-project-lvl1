import { requestInput } from "../src/cli.js";

export let userName;
export const getName = () => {
  if (!userName) {
    userName = requestInput("May I have your name? ");
  }
  return userName;
};
