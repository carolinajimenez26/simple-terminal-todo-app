require('colors');
const { showMenu, pause, handleOption } = require('./utils');

const options = [
  {
    value: 1,
    name: `${"1".magenta}. Add task`,
  },
  {
    value: 2,
    name: `${"2".magenta}. Show tasks`,
  },
  {
    value: 3,
    name: `${"3".magenta}. Modify task`,
  },
  {
    value: 4,
    name: `${"4".magenta}. Delete task`,
  },
  {
    value: 5,
    name: `${"5".magenta}. Mark as done`,
  },
  {
    value: 6,
    name: `${"6".magenta}. Exit`,
  },
];

const message = "Select an option:".magenta;

const main = async () => {
  while (true) {
    const selection = await showMenu(message, options);
    const confirmed = await pause();
    if (selection === 6 && confirmed) {
      break;
    }
    if (confirmed) {
      handleOption(selection);
    }
  }
};

main();