import { printText, requestInput } from "../cli.js";
import { generateNumber, printResultLose } from "../index.js";

export const rules = `Answer "yes" if given number is prime. Otherwise answer "no".`;

export const primeGameLogicFunction = () => {
  const randomNumber = generateNumber();
  const correctAnswer = isPrime(randomNumber) ? "yes" : "no";
  printText(`Question: ${randomNumber}`);
  const userAnswer = requestInput(`Your answer: `);

  if (userAnswer === correctAnswer) {
    return true;
  } else {
    printResultLose(correctAnswer, userAnswer);
    return false;
  }
};

export const isPrime = (randomNumber) => {
  let counter = 0;
  let i = 1;
  if (randomNumber % 2 === 0 && randomNumber > 2) {
    return false;
  }

  while (i <= Math.floor(randomNumber / 2)) {
    if (randomNumber % i === 0) {
      counter += 1;
    }

    i += 1;
  }
  return counter === 1 ? true : false;
};
