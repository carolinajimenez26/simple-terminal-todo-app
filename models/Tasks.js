require('colors');
const Task = require('./Task');

class Tasks {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    }
  }

  get show() {
    console.log('Here are your tasks:'.cyan);
    let i = 1;
    for (const task of this.tasks) {
      if (!task.deleted) {
        console.log(`${'*'.magenta} ${task.description}`);
      }
      i += 1;
    }
  }

  get tasksDescriptionsAndIds() {
    return this.tasks.map(task => {
      return {
        id: task.id,
        description: task.description,
      };
    });
  }

  getTask(taskId) {
    for (let task of this.tasks) {
      if (task.id === taskId) {
        return task;
      }
    }
    return null;
  }
};

module.exports = Tasks;
