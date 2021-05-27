"use strict";

const inquirer = require('inquirer');
const Task = require('./models/Task');
const fs = require('fs');

const showTitle = () => console.log('============= TODO APP ==============='.magenta);

const showMenu = async (message, options) => {
  // console.clear();

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

const Ask = async (question) => {
  const { choice } = await inquirer.prompt([
    {
      type: "input",
      name: "choice",
      message: question,
      validate: (value) => {
        if (value.length === 0) {
          return 'Please add a value';
        }
        return true;
      },
    }
  ]);
  return choice;
}

const loadData = async (path, tasks) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      return console.log(`Unable to scan directory: ${ err }`);
    } 
    files.forEach((file) => {
      const taskInfo = require(`${path}/${file}`);
      const task = new Task(taskInfo);
      tasks.add(task);
    });
  });
};

const handleOption = async (option, tasks) => {
  let handled = false;

  if (option === "add") {
    const description = await Ask("Write a new task description:");
    const task = new Task({
      description
    });
    console.log(task.info);
    tasks.add(task);
    console.log("Task was created!");
    handled = true;
  }
  if (option === "showTasks") {
    tasks.show;
    handled = true;
  }
  if (option === "modify") {
    const tasksDescriptionsAndIds = tasks.tasksDescriptionsAndIds;
    const options = tasksDescriptionsAndIds.map(task => {
      return {
        value: task.id,
        name: task.description,
      };
    });
    console.log(tasksDescriptionsAndIds, options);
    const message = "Select a task to modify:".magenta;
    const taskChosenId = await showMenu(message, options);
    console.log(taskChosenId);
    const task = tasks.getTask(taskChosenId);
    console.log(task.description);
    const description = await Ask("Write a new task description:");
    task.modify(description);
    handled = true;
  }
  if (option === "delete") {
    console.log("I can handle it :D");
    handled = true;
  }
  if (option === "mark") {
    console.log("I can handle it :D");
    handled = true;
  }
  if (option === "showInfo") {
    console.log("I can handle it :D");
    handled = true;
  }
  if (!handled) {
    console.error("Error");
  }
};

module.exports = {
  showTitle,
  showMenu,
  pause,
  handleOption,
  loadData,
};