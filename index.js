/** ***************************************************
 * Express Application Setup
 * - Loads environment variables
 * - Handles asynchronous errors
 * - Sets up middleware for parsing requests and custom logging
 * - Defines routes and mounts routers
 * - Implements global error handling
 * - Starts the Express server and listens on the specified port
 **************************************************** */
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const express = require('express');
const logger = require('./loggers/logger');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
// const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(cors());

const {
  familyReunificationRouter,
} = require('./routers/familyReunification.router');

app.use('/familyReunification', familyReunificationRouter);

// app.listen(port, () => {
//   console.log(`Express server is running on port ${port}`);
// });

module.exports = app;
