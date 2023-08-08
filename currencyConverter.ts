import chalk from "chalk";
import inquirer from "inquirer";

// Conversion API
let apiLink =
  "https://v6.exchangerate-api.com/v6/8dc6930a5625050707d58471/latest/PKR";

let fetchData = async (data: any) => {
  let fetchQuiz = await fetch(data);
  let res = await fetchQuiz.json();
  return res.conversion_rates;
};
let data = await fetchData(apiLink);
let countries = Object.keys(data);

// first Country
let firstCountry = await inquirer.prompt({
  type: "list",
  message: "Please select the First country",
  name: "country1",
  choices: countries,
});
let first = firstCountry.country1;
let secondCountry = await inquirer.prompt({
  type: "list",
  message: "Please select the First country",
  name: "country2",
  choices: countries,
});

// user conversion money here
let money = await inquirer.prompt({
  type: "number",
  name: "value",
  message: `please enter the amount in ${first}`,
});
let paisa = money.value;

// second Country
let second = secondCountry.country2;
let conRate = `https://v6.exchangerate-api.com/v6/8dc6930a5625050707d58471/pair/${first}/${second}`;
let fetchData2 = async (data: any) => {
  let fetchQuiz = await fetch(data);
  let res = await fetchQuiz.json();
  return res.conversion_rate;
};
let a = await fetchData2(conRate);

// answer here
console.log(
  `Your Amount ${chalk.green.bold(
    `${first} ${paisa}`
  )} is ${chalk.bold.greenBright.italic(`${second} ${paisa * a}`)}`
);
