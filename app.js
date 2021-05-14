require('colors');
const { showMenu } = require('./utils');

const options = [
  {
    value: 1,
    name: "1. Add task",
  },
  {
    value: 2,
    name: "2. Show tasks",
  },
  {
    value: 3,
    name: "3. Modify task",
  },
  {
    value: 4,
    name: "4. Delete task",
  },
  {
    value: 5,
    name: "5. Mark as done",
  },
  {
    value: 6,
    name: "6. Exit",
  },
];

const message = "Select an option:".magenta;

const main = async () => {
  let finished = false;
  while (!finished) {
    const selection = await showMenu(message, options);
    if (selection === 6) {
      finished = true;
    }
  }
};

main();