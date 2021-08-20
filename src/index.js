import { printText } from "../src/cli.js";
import { getName, userName } from "./userData.js";

export const greet = 'Welcome to the Brain Games!';

export const printUserName = (str) => {
  printText(`Hello, ${str}!`);
};

export const generateNumber = () => {
  return Math.floor(Math.random() * 100);
};

export const printResultLose = (correctAnswer, userAnswer) => {
  printText(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
  );
};

export const playGame = (currentGameLogicFunction, rules, numberOfRounds) => {
  printText(greet);
  getName();
  printUserName(userName);
  printText(rules);
  while (numberOfRounds > 0) {
    if (currentGameLogicFunction()) {
      printText("Correct!");
      numberOfRounds -= 1;
    } else break;
  }

  if (numberOfRounds === 0) {
    printText(`Congratulations, ${userName}!`);
  }
};
