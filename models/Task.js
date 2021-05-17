const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

class Task {
  constructor({
      id,
      createdAt,
      description,
      modifiedAt,
      solved,
      solvedAt,
      deleted,
      deletedAt
    }) {
    this.id = id || uuidv4();
    this.createdAt = createdAt || new Date();
  
    this.description = description;
    this.modifiedAt = modifiedAt || null;

    this.solved = solved || false;
    this.solvedAt = solvedAt || null;

    this.deleted = deleted || false;
    this.deletedAt = deletedAt || null;

    this.save();
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
    this.save();
  }

  markAsDone() {
    this.solved = true;
    this.solvedAt = new Date();
    this.save();
  }

  delete() {
    this.deleted = true;
    this.deletedAt = new Date();
    this.save();
  }

  save() {
    const path = `./data/${this.id}.json`;
    const data = {
      id: this.id,
      createdAt: this.createdAt,
      description: this.description,
      modifiedAt: this.modifiedAt,
      solved: this.solved,
      solvedAt: this.solvedAt,
      deleted: this.deleted,
      deletedAt: this.deletedAt,
    };
    fs.writeFileSync(path, JSON.stringify(data));
  }
};

module.exports = Task;
