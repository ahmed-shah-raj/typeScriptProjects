import chalk from "chalk";
import inquirer from "inquirer";

// class for player
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

// class for opponent
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

// asking player name
let player = await inquirer.prompt({
  type: "input",
  message: "What is your name? ",
  name: "name",
});

// asking opponent name
let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "please slect the opponent",
  choices: ["skeleton", "zombie", "assassin"],
});

// Gathering Data
const p1 = new Player(player.name);
const o1 = new Opponent(opponent.select);

// Showing Names
console.log(
  `${chalk.green.bold.italic(p1.name)} VS ${chalk.red.bold.italic(o1.name)}`
);
// Showing Fuels
console.log(
  `${chalk.blueBright.bold("Player Health:")} ${chalk.green(
    p1.fuel
  )} ${chalk.redBright.bold("Opponent Health:")} ${chalk.red(o1.fuel)}`
);
async function game() {
  do {
    if (opponent.select == "skeleton") {
      let choice = await inquirer.prompt({
        type: "list",
        name: "player",
        message: "please slect option",
        choices: ["Attack", "Drink Portion", "Run for Your Life.."],
      });
      if (choice.player == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num == 0) {
          o1.fuelDecrease();
          console.log(
            `Player Health: ${chalk.green(
              p1.fuel
            )} Opponent Health: ${chalk.red(o1.fuel)}`
          );
          if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Won"));
            process.exit();
          }
        }
        if (num == 1) {
          p1.fuelDecrease();
          console.log(
            `Player Health: ${chalk.green(
              p1.fuel
            )} Opponent Health: ${chalk.red(o1.fuel)}`
          );
          if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose, Try Again"));
            process.exit();
          }
        }
      }
      if (choice.player == "Drink Portion") {
        p1.fuelIncrease();
      }
      if (choice.player == "Run for Your Life..") {
        console.log(chalk.red.bold.italic("You Loose, Try Again"));
        process.exit();
      }
    }
    if (opponent.select == "zombie") {
      let choice = await inquirer.prompt({
        type: "list",
        name: "player",
        message: "please slect option",
        choices: ["Attack", "Drink Portion", "Run for Your Life.."],
      });
      if (choice.player == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num == 0) {
          o1.fuelDecrease();
          console.log(
            `Player Health: ${chalk.green(
              p1.fuel
            )} Opponent Health: ${chalk.red(o1.fuel)}`
          );
          if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Won"));
            process.exit();
          }
        }
        if (num == 1) {
          p1.fuelDecrease();
          console.log(
            `Player Health: ${chalk.green(
              p1.fuel
            )} Opponent Health: ${chalk.red(o1.fuel)}`
          );
          if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose, Try Again"));
            process.exit();
          }
        }
      }
      if (choice.player == "Drink Portion") {
        p1.fuelIncrease();
      }
      if (choice.player == "Run for Your Life..") {
        console.log(chalk.red.bold.italic("You Loose, Try Again"));
        process.exit();
      }
    }
    if (opponent.select == "assassin") {
      let choice = await inquirer.prompt({
        type: "list",
        name: "player",
        message: "please slect option",
        choices: ["Attack", "Drink Portion", "Run for Your Life.."],
      });
      if (choice.player == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num == 0) {
          o1.fuelDecrease();
          console.log(
            `Player Health: ${chalk.green(
              p1.fuel
            )} Opponent Health: ${chalk.red(o1.fuel)}`
          );
          if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Won"));
            process.exit();
          }
        }
        if (num == 1) {
          p1.fuelDecrease();
          console.log(
            `Player Health: ${chalk.green(
              p1.fuel
            )} Opponent Health: ${chalk.red(o1.fuel)}`
          );
          if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose, Try Again"));
            process.exit();
          }
        }
      }
      if (choice.player == "Drink Portion") {
        p1.fuelIncrease();
      }
      if (choice.player == "Run for Your Life..") {
        console.log(chalk.red.bold.italic("You Loose, Try Again"));
        process.exit();
      }
    }
  } while (true);
}

game();
