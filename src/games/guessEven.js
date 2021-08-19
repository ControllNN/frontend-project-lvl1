import { generateNumber, printResultLose } from "../index.js";
import { printText, requestInput } from "../cli.js";

export const rules = `Answer "yes" if the number is even, otherwise answer "no".`;

export const evenGameLogicFunction = () => {
  const randomNumber = generateNumber();
  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? "yes" : "no";
  printText(`Question: ${randomNumber}`);
  const userAnswer = requestInput(`Your answer: `);
  if (userAnswer === correctAnswer) {
    return true;
  } else {
    printResultLose(correctAnswer, userAnswer);
    return false;
  }
};
