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
