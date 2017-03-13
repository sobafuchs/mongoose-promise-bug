const mongoose = require('mongoose');
const parentSchema = require('./parent');
const childSchema = require('./child');

exports.Parent = mongoose.model('Parent', parentSchema);

exports.Child = mongoose.model('Child', childSchema);