// Quiz App
import inquirer from "inquirer";
import chalk from "chalk";

interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

let apiLink =
  "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple";

let fetchData = async <T>(data: string): Promise<T> => {
  let fetchQuiz = await fetch(data);
  let res = await fetchQuiz.json();
  return res.results;
};

let data = await fetchData<Quiz[]>(apiLink);

// Shuffle Array
function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let startQuiz = async () => {
  let score: number = 0;
  let name = await inquirer.prompt({
    type: "input",
    name: "fname",
    message: "Write Your Name:",
  });
  for (let i = 1; i <= 5; i++) {
    let answers: string[] = [
      ...data[i].incorrect_answers,
      data[i].correct_answer,
    ];
    let shuffleAns: string[] = shuffle(answers);
    let ans = await inquirer.prompt({
      type: "list",
      name: "q",
      message: data[i].question,
      choices: shuffleAns.map((val: any) => val),
    });
    if (ans.q == data[i].correct_answer) {
      ++score;
      console.log(chalk.bold.green(data[i].correct_answer));
    } else {
      console.log(chalk.bold.red(data[i].correct_answer));
    }
  }
  console.log(
    `Dear ${chalk.blue.bold(name.fname)} your score is ${chalk.bold.red(
      score
    )} out of ${chalk.bold.red("5")}`
  );
};

startQuiz();
