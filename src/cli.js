import readlineSync from "readline-sync";

export const printText = (stringToPrint) => {
  console.log(stringToPrint);
};

export const requestInput = (requestStr) => {
  const userInput = readlineSync.question(`${requestStr}`);
  return userInput;
};
