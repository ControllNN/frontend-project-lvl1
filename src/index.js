import { printText } from "../src/cli.js";
import { getName, userName } from "./userData.js";

export const greet = "Welcome to the Brain Games!";

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

// export const printResultWin = (userName) => {
//   printText(`Congratulations, ${userName}!`);
// };

// export const printQuestion = (agr) => {
//   printText(`Question: ${agr}`);
// };

// export const compareAnswer = (result, answer) => {
//   return result === answer;
// };

// export let userName;
// export const getName = (str) => {
//   if (!userName) {
//     userName = requestInput(str);
//   }
//   return userName;
// };

// export const getAnswer = (str) => {
//   const answer = requestInput(str);
//   return answer;
// };

//let name;
// export const printName = () => {
//   name = readlineSync.question("May I have your name? ");
//   console.log(`Hello, ${name}!`);
// };

// export const printQestionAllGames = (arg = "NUMBER") => {
//   console.log(`Question: + NUMBER || Expression( ${arg} `);
//   console.log(typeof arg);
//   return;
// };

// export const getAnswerAllGames = () => {
//   const answer = readlineSync.question(`Your answer: `);
//   console.log(answer);
//   console.log(typeof answer);
//   return answer;
// };

// export const getGameResult = (result, correctAnswer, answer) => {
//   if (result === "win") {
//     printText(`Congratulations, ${userName}!`);
//   } else
//     printText(
//       `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
//     );
// };
