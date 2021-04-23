'use strict';

const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true }
})

const dogModel = mongoose.model('dog', dogSchema);

module.exports = dogModel;