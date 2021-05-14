require('colors');
const { 
  showMenu, 
  pause,
  handleOption,
} = require('./utils');

const message = "Select an option:".magenta;
const options = [
  {
    value: "add",
    name: `${"1".magenta}. Add task`,
  },
  {
    value: "showTasks",
    name: `${"2".magenta}. Show tasks`,
  },
  {
    value: "modify",
    name: `${"3".magenta}. Modify task`,
  },
  {
    value: "delete",
    name: `${"4".magenta}. Delete task`,
  },
  {
    value: "mark",
    name: `${"5".magenta}. Mark as done`,
  },
  {
    value: "showInfo",
    name: `${"6".magenta}. Show task info`,
  },
  {
    value: "exit",
    name: `${"7".magenta}. Exit`,
  },
];

const main = async () => {
  while (true) {
    const selection = await showMenu(message, options);
    const confirmed = await pause();
    if (selection === "exit" && confirmed) {
      break;
    }
    if (confirmed) {
      handleOption(selection);
    }
  }
};

main();