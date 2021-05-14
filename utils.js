"use strict";

const inquirer = require('inquirer');

const showTitle = () => console.log('============= TODO APP ==============='.magenta);

const showMenu = async (message, options) => {
  // console.clear();
  showTitle();

  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message,
      choices: options,
    }
  ]);

  return choice;
};

const pause = async () => {
  const { choice } = await inquirer.prompt([
    {
      type: "confirm",
      name: "choice",
      message: "Do you confirm your selection?",
    }
  ]);
  return choice;
};

const getExitOption = (options) => {
  let exitOption = null;
  options.forEach((opt) => {
    if (opt.name.includes("Exit")) {
      exitOption = opt.value;
    }
  });
  return exitOption;
};

const handleOption = (option) => {
  switch (option) {
    case "add":
    case "showTasks": 
    case "modify": 
    case "delete": 
    case "mark": 
    case "showInfo":
      console.log("I can handle it :D");
      break;
    default:
    console.error("Error");
  }
};

module.exports = {
  showMenu,
  pause,
  handleOption,
};