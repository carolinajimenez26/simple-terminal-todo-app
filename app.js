require('colors');
const { showMenu, selectOption } = require('./utils');

const main = async () => {
  console.clear();
  showMenu();
  let validSelection = false;
  while (!validSelection) {
    validSelection = await selectOption(["1","2","3","4","5","6"]);
  }
};

main();