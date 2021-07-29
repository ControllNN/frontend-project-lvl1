import readlineSync from "readline-sync";
import { getName } from "../cli.js";

export const getTerm = () => {
  console.log(`"Answer "yes" if the number is even, otherwise answer "no".`);
};

export const getGameResult = (result, correctAnswer, answer) => {
  if (result === "win") {
    console.log(`Congratulations, ${getName()}!`);
  } else
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getName()}!`
    );
};

const generateNumber = () => {
  return Math.floor(Math.random() * 100);
};

export const printQestion = () => {
  let answersCount = 0;

  while (answersCount < 3) {
    const randomNumber = generateNumber();
    const isEven = randomNumber % 2 === 0;
    const answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    let correctAnswer;

    if (isEven) {
      correctAnswer = "yes";
    } else correctAnswer = "no";

    if ((isEven && answer === "yes") || (!isEven && answer === "no")) {
      answersCount += 1;
      console.log("Correct!");
    } else {
      getGameResult("loss", correctAnswer, answer);
      break;
    }
  }

  if (answersCount === 3) getGameResult("win");
};
