'use strict';

const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  count: { type: Number, required: true },
  image: { type: String, required: true }
})

const electronicsModel = mongoose.model('electronics', electronicsSchema);

module.exports = electronicsModel;