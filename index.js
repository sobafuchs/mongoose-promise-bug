const mongoose = require('mongoose');
const co = require('co');
mongoose.Promise = global.Promise

// CONSTANTS
const GITHUB_ISSUE = `gh-mongoose-promise-bug`;

// This must always come before any mongoose-related fns get invoked
mongoose.Promise = global.Promise;
const db = mongoose.connect(`mongodb://localhost:27017/${GITHUB_ISSUE}`);
const models = require('./models');

test()
  .then(() => {
    console.log('docs successfully created');
    closeConnection();
  })
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    closeConnection();
    process.exit(2);
  });

function closeConnection() {
  db.connection.close();
}

function test() {
  return models.Parent.remove({})
    .then(() => models.Parent.create({ name: 'Parent Doc' }))
    .then(parent => models.Child.create({ parent: parent._id, name: 'Child Doc'}))
    .then(child => {
      child.name = 'new child name';
      return child.save();
    }); // call save
}
