const mongoose = require('mongoose');
const co = require('co');
const DB = `mongoose-promise-bug`;
const db = mongoose.connect(`mongodb://localhost:27017/${ DB }`);
const models = require('./models');

// Constants

describe('Test', function() {

  before(function(done) {
    co(function*() {
      yield [models.Parent.remove({}), models.Child.remove({})];
      done();
    }).catch(done);
  });
  
  it('sample test', function(done) {
    co(function*() {
      const doc = yield models.Parent.create({ name: 'Testing' });
      done();
    }).catch(done);
  });
});