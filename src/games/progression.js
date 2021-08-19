import { generateNumber, printResultLose } from "../index.js";
import { printText, requestInput } from "../cli.js";

export const rules = "What number is missing in the progression?";

export const progressionGameLogicFunction = () => {
  const correctAnswer = generateStrProgression();
  const userAnswer = requestInput(`Your answer: `);

  if (correctAnswer == userAnswer) {
    return true;
  } else {
    printResultLose(correctAnswer, userAnswer);
    return false;
  }
};

export const generateStrProgression = () => {
  const randomNumberProgressionA1 = generateNumber(); //first member  progression 0 to 100
  const randomStepProgression = generateNumber() + 1; // > 0
  const randomLengthProgression = Math.floor(Math.random() * (10 - 5) + 5); // length progression = 5 to 10
  const randomIndexSecretNumber = Math.floor(
    Math.random() * randomLengthProgression
  ); // 0 to (randomLengthProgression -1)

  let nextMemberProgression = randomNumberProgressionA1;
  let secretNumber;
  let strProgressive = "";
  let i = 0;
  while (i < randomLengthProgression) {
    nextMemberProgression += randomStepProgression;
    if (i == randomIndexSecretNumber) {
      strProgressive += ".." + " ";
      secretNumber = nextMemberProgression;
    } else {
      strProgressive += nextMemberProgression + " ";
    }
    i++;
  }
  printText(`Question: ${strProgressive}`);
  return secretNumber;
};
