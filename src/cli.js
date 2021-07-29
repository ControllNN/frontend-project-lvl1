import readlineSync from "readline-sync";

export const greet = () => {
  console.log("Welcome to the Brain Games!");
};

let name;
export const printName = () => {
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};

export const getName = () => {
  return name;
};
