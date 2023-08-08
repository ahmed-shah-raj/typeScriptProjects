import inquirer from "inquirer";

const wordCount = (text: string) => {
  const spaceFree = text.replace(/\s/g, "");
  return spaceFree.length;
};

const start = async (wordCount: (text: string) => number) => {
  do {
    const text = await inquirer.prompt({
      type: "input",
      name: "para",
      message: "write paragraph",
    });
    console.log(wordCount(text.para));
  } while (true);
};

start(wordCount);
