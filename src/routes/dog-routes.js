'use strict';

const express = require('express');

const GenericCollection = require('../models/data-collection-class.js'); // bring in generic model
const dogModel = require('../models/dog-schema.js'); // bring in dog model/schema
const dog = new GenericCollection(dogModel); // run dog model through generic collection to use on routes

const dogRouter = express.Router();

dogRouter.get('/dog', getAllDogs);
dogRouter.get('/dog/:id', getOneDog);
dogRouter.post('/dog', createDog);
dogRouter.put('/dog/:id', updateDog);
dogRouter.delete('/dog/:id', deleteDog);

async function getAllDogs(req, res) {
  const getAllTheDogs = await dog.read();
  res.status(200).json(getAllTheDogs);
}

async function getOneDog(req, res) {
  const id = req.params.id;
  const theDog = await dog.read(id);
  res.status(200).json(theDog);
}

async function createDog(req, res) {
  const data = req.body;
  const createdDog = await dog.create(data);
  res.status(201).json(createdDog);
}

async function updateDog(req, res) {
  const id = req.params.id;
  const data = req.body;
  const updatedDog = await dog.update(id, data);
  res.status(200).json(updatedDog);
}

async function deleteDog(req, res) {
  const id = req.params.id;
  const deletedDog = await dog.delete(id);
  res.status(200).json(deletedDog);
}


module.exports = dogRouter;