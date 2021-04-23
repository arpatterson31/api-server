'use strict';

const express = require('express');

const GenericCollection = require('../models/data-collection-class.js'); // bring in generic model
const catModel = require('../models/cat-schema'); // bring in cat model/schema
const cat = new GenericCollection(catModel); // run cat model through generic collection to use on routes

const catRouter = express.Router();

catRouter.get('/cat', getAllCats);
catRouter.get('/cat/:id', getOneCat);
catRouter.post('/cat', createCat);
catRouter.put('/cat/:id', updateCat);
catRouter.delete('/cat/:id', deleteCat);

async function getAllCats(req, res) {
  const getAllTheCats = await cat.read();
  res.status(200).json(getAllTheCats);
}

async function getOneCat(req, res) {
  const id = +req.params.id;
  const theCat = await cat.read(id);
  res.status(200).json(theCat);
}

async function createCat(req, res) {
  const data = req.body;
  const createdCat = await cat.create(data);
  res.status(201).json(createdCat);
}

async function updateCat(req, res) {
  const id = +req.params.id;
  const data = req.body;
  const updatedCat = await cat.update(id, data);
  res.status(200).json(updatedCat);
}

async function deleteCat(req, res) {
  const id = +req.params.id;
  const deletedCat = await cat.delete(id);
  res.status(200).send('Cat Deleted');
}

module.exports = catRouter;