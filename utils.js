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
  console.log({ choice });
  return choice;
};

const handleOption = (option) => {
  console.log(`You selected ${option}`);
};

module.exports = {
  showMenu,
  pause,
  handleOption,
};