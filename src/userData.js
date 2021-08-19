import { requestInput } from "../src/cli.js";

// export let userAnswer;
// export const getAnswer = () => {
//   const userAnswer = requestInput(`Your answer: `);
//   return userAnswer;
// };

export let userName;
export const getName = () => {
  if (!userName) {
    userName = requestInput("May I have your name? ");
  }
  return userName;
};
