const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(description) {
    this.id = uuidv4();
    this.createdAt = new Date();
  
    this.description = description;
    this.modifiedAt = null;

    this.solved = false;
    this.solvedAt = null;

    this.deleted = false;
    this.deletedAt = null;
  }

  get info() {
    const modifiedAt = this.modifiedAt ? this.modifiedAt : 'Not modified yet';
    const solvedAt = this.solvedAt ? this.solvedAt : 'Not solved yet';
    const deletedAt = this.deletedAt ? this.deletedAt : 'Not solved yet';
    return `
      Description: ${ this.description }\n
      Created at: ${ this.createdAt }\n
      Modified at: ${ modifiedAt }\n
      Solved at: ${ solvedAt }\n
      Deleted at: ${ deletedAt }\n
    `;
  }

  modify(description) {
    this.description = description;
    this.modifiedAt = new Date();
  }

  markAsDone() {
    this.solved = true;
    this.solvedAt = new Date();
  }

  delete() {
    this.deleted = true;
    this.deletedAt = new Date();
  }
};

module.exports = Task;
