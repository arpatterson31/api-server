'use strict';

const express = require('express');

const GenericCollection = require('../models/data-collection-class.js'); // bring in generic model
const dogModel = require('../models/dog-schema'); // bring in dog model/schema
const dog = new GenericCollection(dogModel); // run dog model through generic collection to use on routes

const dogRouter = express.Router();

dogRouter.get('/dog', getAllDogs);
dogRouter.get('/dog/:id', getOneDog);
dogRouter.post('/dog', createDog);
dogRouter.put('/dog/:id', updateDog);
dogRouter.delete('/dog/:id', deleteDog);