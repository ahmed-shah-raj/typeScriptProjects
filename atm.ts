import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

interface User {
  name: string;
  id: number;
  pin: number;
  account: number;
  balance: number;
}

const createUser = () => {
  let users: User[] = [];

  for (let i = 0; i < 3; i++) {
    let user: User = {
      name: faker.person.fullName(),
      id: i,
      pin: 1000 + i,
      account: Math.floor(100000000 * Math.random() * 900000000),
      balance: 100000 * i,
    };
    users.push(user);
  }

  return users;
};

const atmStart = async (users: User[]) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "write pin",
    name: "pin",
  });

  let user = users.find((val) => val.pin == res.pin);

  if (user) {
    console.log(`Welcome ${user.name}`);
    atmFunc(user);
  } else {
    console.log("invaild user pin");
  }
};

const atmFunc = async (user: User) => {
  const ans = await inquirer.prompt({
    type: "list",
    name: "select",
    choices: ["check balance", "withdraw", "exit"],
  });

  if (ans.select == "check balance") {
    console.log("account balance: ", user.balance);
    return;
  }
  if (ans.select == "withdraw") {
    const ans = await inquirer.prompt({
      type: "number",
      name: "amount",
      message: "enter withdraw amount",
    });
    if (user.balance < ans.amount) return console.log("inscificient balance");

    console.log("account balance: ", user.balance - ans.amount);
    console.log("Withdraw amount: ", ans.amount);
    return;
  }
  if (ans.select == "exit") {
    console.log("Thank you for using atm.");
    return;
  }
};

const users = createUser();

atmStart(users);

// console.log(createUser());
