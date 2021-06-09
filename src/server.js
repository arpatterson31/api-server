'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const logger = require('./middleware/logger.js');
const catRoutes = require('./routes/cat-routes.js');
const dogRoutes = require('./routes/dog-routes.js');
const foodRoutes = require('./routes/food-routes.js');
const clothesRoutes = require('./routes/clothes-routes.js');
const electronicsRoutes = require('./routes/electronics-routes.js');

const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');


app.use(cors());
app.use(express.json());

app.use(logger);
app.use(catRoutes);
app.use(dogRoutes);
app.use(foodRoutes);
app.use(clothesRoutes);
app.use(electronicsRoutes);

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Gurrl we up on: ${port}`);
    });
  }
}