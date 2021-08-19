#!/usr/bin/env node
import { printText, requestInput } from "../cli.js";
import { generateNumber, printResultLose } from "../index.js";

export const rules = "Find the greatest common divisor of given numbers.";

export const gcdGameLogicFunction = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  printText(`Question: ${num1} ${num2}`);
  const userAnswer = requestInput(`Your answer: `);

  const correctAnswer = getGreatestCommonDivisor(num1, num2);

  if (correctAnswer == userAnswer) {
    return true;
  } else {
    printResultLose(correctAnswer, userAnswer);
    return false;
  }
};

const getGreatestCommonDivisor = (num1, num2) => {
  let i = 1;
  let result;

  while (i <= num1 && i <= num2) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
    i += 1;
  }
  return result;
};
