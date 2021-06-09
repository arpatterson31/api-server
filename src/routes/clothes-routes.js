'use strict';

const express = require('express');

const GenericCollection = require('../models/data-collection-class.js');
const clothesModel = require('../models/clothes-schema.js');
const clothes = new GenericCollection(clothesModel);

const clothesRouter = express.Router();


clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('/clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);


async function getClothes(req, res) {
  let getAllClothes = await clothes.read();
  res.status(200).json(getAllClothes);
}

async function getOneClothes(req, res, next) {
  const id = req.params.id;
  let singleClothes = await clothes.read(id);
  if(singleClothes){
    res.status(200).json(singleClothes);
  } else {
    next()
  }
}

async function createClothes(req, res) {
  let content = req.body;
  let createdClothes = await clothes.create(content);
  res.status(201).json(createdClothes);

}

async function updateClothes(req, res) {
  const id = req.params.id;
  let content = req.body;
  let updatedClothes = await clothes.update(id, content);
  res.status(200).json(updatedClothes);
}

async function deleteClothes(req, res) {
  const id = req.params.id;
  let deletedClothes = await clothes.delete(id);
  res.status(201).json(deletedClothes);
}

module.exports = {
  clothesRouter,
  clothes
}
