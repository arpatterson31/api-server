'use strict';

const express = require('express');

const GenericCollection = require('../models/data-collection-class.js');
const productModel = require('../models/products-schema.js');
const product = new GenericCollection(productModel);

const productRouter = express.Router();


productRouter.get('/products', getProduct);
productRouter.get('/products/:id', getOneProduct);
productRouter.post('/products', createProduct);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);


async function getProduct(req, res) {
  let getAllProducts = await product.read()
  res.status(200).json(getAllProducts);
}

async function getOneProduct(req, res, next) {
  const id = req.params.id;
  let singleProduct = await product.read(id);
  if(singleProduct){
    res.status(200).json(singleProduct);
  } else {
    next()
  }
}

async function createProduct(req, res) {
  let content = req.body;
  let createdProduct = await product.create(content)
  res.status(201).json(createdProduct);
}

async function updateProduct(req, res) {
  const id = req.params.id;
  let content = req.body;
  let updatedProduct = await product.update(id, content);
  res.status(200).json(updatedProduct);
}

async function deleteProduct(req, res) {
  const id = req.params.id;
  let deletedProduct = await product.delete(id);
  res.status(201).json(deletedProduct);
}

module.exports = productRouter;