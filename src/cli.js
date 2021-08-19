import readlineSync from "readline-sync";
//import { generateNumberAllGames } from "../src/index";

export const printText = (stringToPrint) => {
  console.log(stringToPrint);
};

export const requestInput = (requestStr) => {
  const userInput = readlineSync.question(`${requestStr}`);
  return userInput;
};
