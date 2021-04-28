"use strict";
const readline = require('readline');

const selectOption = async (correctOptions) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    let wasValid = true;
    rl.question("Select [1-6]: ".green, (option) => {
      if (!correctOptions.includes(option)) {
        console.log(`Invalid selection ${ `${option}`.red }. Please try again `);
        wasValid = false;
      }
      rl.close();
      resolve(wasValid);
    });
  }); 
};

const showMenu = () => {
  showTitle();
  console.log("Select an option:".magenta);
  console.log(` ${"1".magenta}. Add task`);
  console.log(` ${"2".magenta}. Show tasks`);
  console.log(` ${"3".magenta}. Modify task`);
  console.log(` ${"4".magenta}. Delete task`);
  console.log(` ${"5".magenta}. Mark as done`);
  console.log(` ${"6".magenta}. Exit \n`);
};

const showTitle = () => console.log('============= TODO APP ==============='.magenta);

module.exports = {
  showTitle,
  showMenu,
  selectOption,
};