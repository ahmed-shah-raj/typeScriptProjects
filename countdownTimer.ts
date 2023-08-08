import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const ans = await inquirer.prompt({
  type: "number",
  message: "Please enter the timer seconds",
  name: "targetDate",
  validate: (input) => {
    const sec = parseInt(input); // Parse the input as an integer
    if (isNaN(sec)) {
      return "Please enter a valid number.";
    } else if (sec > 60) {
      return "Seconds must be 60 or less.";
    } else {
      return true; // Input is valid
    }
  },
});

function startTimer(val: any) {
  const intTime = new Date().setSeconds(new Date().getSeconds() + val);
  const intervalTime = new Date(intTime);
  setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currentTime);
    if (timeDiff <= 0) {
      console.log("Timer has expired");
      process.exit();
    }
    const minutes = Math.floor((timeDiff % (3600 * 24)) / 3600);
    const seconds = timeDiff % 60;
    console.log(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );
  }, 1000);
}

startTimer(ans.targetDate);
