import chalk from "chalk";
import inquirer from "inquirer";

let ans = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: `Enter ${chalk.bold.greenBright("First Number")}:`,
  },
  {
    type: "list",
    name: "sign",
    message: `Choose ${chalk.bold.greenBright("Operation")}:`,
    choices: ["+", "-", "/", "*"],
  },
  {
    type: "number",
    name: "num2",
    message: `Enter ${chalk.bold.greenBright("Second Number")}:`,
  },
]);

if (ans.sign == "+") {
  console.log(ans.num1 + ans.num2);
}
if (ans.sign == "-") {
  console.log(ans.num1 - ans.num2);
}
if (ans.sign == "/") {
  console.log(ans.num1 / ans.num2);
}
if (ans.sign == "*") {
  console.log(ans.num1 * ans.num2);
}
