'use strict';

const express = require('express');

const GenericCollection = require('../models/data-collection-class.js');
const electronicsModel = require('../models/electronics-schema.js');
const electronic = new GenericCollection(electronicsModel);

const electronicsRouter = express.Router();


electronicsRouter.get('/electronics', getElectronics);
electronicsRouter.get('/electronics/:id', getOneElectronic);
electronicsRouter.post('/electronics', createElectronic);
electronicsRouter.put('/electronics/:id', updateElectronic);
electronicsRouter.delete('/electronics/:id', deleteElectronic);


async function getElectronics(req, res) {
  let getAllElectronics = await electronic.read()
  res.status(200).json(getAllElectronics);
}

async function getOneElectronic(req, res, next) {
  const id = req.params.id;
  let singleElectronic = await electronic.read(id);
  if(singleElectronic){
    res.status(200).json(singleElectronic);
  } else {
    next()
  }
}

async function createElectronic(req, res) {
  let content = req.body;
  let createdElectronic = await electronic.create(content)
  res.status(201).json(createdElectronic);
}

async function updateElectronic(req, res) {
  const id = req.params.id;
  let content = req.body;
  let updatedElectronic = await electronic.update(id, content);
  res.status(200).json(updatedElectronic);
}

async function deleteElectronic(req, res) {
  const id = req.params.id;
  let deletedElectronic = await electronic.delete(id);
  res.status(201).json(deletedElectronic);
}

module.exports = electronicsRouter;
