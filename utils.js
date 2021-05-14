"use strict";

const inquirer = require('inquirer');

const showTitle = () => console.log('============= TODO APP ==============='.magenta);

const showMenu = async (message, options) => {
  console.clear();
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

module.exports = {
  showMenu,
};