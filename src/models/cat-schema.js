'use strict';

const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true }
})

const catModel = mongoose.model('cat', catSchema);

module.exports = catModel;