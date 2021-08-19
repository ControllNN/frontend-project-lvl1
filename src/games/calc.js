import { printText, requestInput } from "../cli.js";
import { generateNumber, printResultLose } from "../index.js";

export const rules = "What is the result of the expression?";

export const calcGameLogicFunction = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const array = ["+", "-", "*"];
  const randomNumberForArray = Math.floor(Math.random() * 3);
  const generateQuestionStr = `${num1} ${array[randomNumberForArray]} ${num2}`;

  const expressionResult = eval(generateQuestionStr);

  printText(`Question: ${generateQuestionStr}`);
  const userAnswer = requestInput(`Your answer: `);

  if (userAnswer == expressionResult && userAnswer !== "") {
    return true;
  } else {
    printResultLose(expressionResult, userAnswer);
    return false;
  }
};
