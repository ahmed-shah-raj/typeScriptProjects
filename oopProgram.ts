import chalk from "chalk";
import inquirer from "inquirer";

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class Person {
  student: Student[] = [];

  addStudent(name: Student) {
    this.student.push(name);
  }
}

let persons = new Person();

async function programStart(persons: Person) {
  do {
    let res = await inquirer.prompt({
      type: "list",
      name: "choice",
      message: "Who would you like to talk?",
      choices: ["1. To Yourself", "2. To Others"],
    });
    if (res.choice == "1. To Yourself") {
      console.log(chalk.red.bold.italic("Tum Qatai Akele ho, INTROVERT"));
      let res = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "what is your name: ",
      });
      console.log(
        `Dear, ${chalk.blueBright.bold.italic(
          res.name
        )} your Personality Type is ${chalk.red.bold.italic("Mysterious")}`
      );
    }
    if (res.choice == "2. To Others") {
      let res = await inquirer.prompt({
        type: "input",
        name: "ans",
        message: "Who would you like to talk?",
      });
      let name = persons.student.find((val) => val.name == res.ans);
      if (name) {
        console.log(
          `Hello I am ${chalk.green.bold.italic(name.name)} How may I help you?`
        );
      }
      if (!name) {
        let newPerson = new Student(res.ans);
        persons.addStudent(newPerson);
        console.log(
          `Hello I am ${chalk.green(res.ans)} How may I help you......?`
        );
        console.log(persons.student);
      }
    }
  } while (true);
}

programStart(persons);
