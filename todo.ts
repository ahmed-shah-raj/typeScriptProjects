import inquirer from "inquirer";

let todos: string[] = [];

const func = async (todos: string[]) => {
  do {
    const res = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "select operation",
      choices: ["add", "delete", "update", "view all", "exit"],
    });
    if (res.select == "view all") {
      console.log(todos);
    }
    if (res.select == "add") {
      const addTodo = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: "Add todo item",
      });
      todos.push(addTodo.todo);
      console.log(todos);
    }
    if (res.select == "delete") {
      const delTodo = await inquirer.prompt({
        type: "list",
        name: "todo",
        choices: todos.map((val) => val),
        message: "delete todo item",
      });
      let newTodo: string[] = todos.filter((val) => val !== delTodo.todo);
      todos = newTodo;
      console.log(todos);
    }
    if (res.select == "update") {
      const delTodo = await inquirer.prompt({
        type: "list",
        name: "todo",
        choices: todos.map((val) => val),
        message: "update todo item",
      });
      const addTodo = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: "Add todo item",
      });
      let newTodo: string[] = todos.filter((val) => val !== delTodo.todo);
      todos = [...newTodo, addTodo.todo];
      console.log(todos);
    }
    if (res.select == "exit") {
      return;
    }
  } while (true);
};

func(todos);
