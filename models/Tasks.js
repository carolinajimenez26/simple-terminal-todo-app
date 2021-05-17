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
    console.log('Here are your tasks:');
    for (const task of this.tasks) {
      if (!task.deleted) {
        console.log(task.description);
      }
    }
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
