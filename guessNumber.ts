// GUESS THE NUMBER GAME

import chalk from "chalk";
import inquirer from "inquirer";

// creating secret number
const secretNumber: number = Math.floor(Math.random() * 5) + 1;
console.log(
  chalk.bold.underline(
    "I've picked the number now please guess the Number from Given Options."
  )
);

// user input for secret number
let userNumber = await inquirer.prompt({
  type: "list",
  message: "Please Select the Number",
  name: "num",
  choices: ["1", "2", "3", "4", "5"],
});

// converting user input to number
let a: number = parseInt(userNumber.num);

// guess game starts here
if (secretNumber === a) {
  console.log(chalk.green.bold("Congratulations you WON"));
} else {
  console.log(chalk.red.bold("BETTER LUCK NEXT TIME"));
}
