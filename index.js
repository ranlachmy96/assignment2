const cors = require('cors');
const express = require('express');
const logger = require('./loggers/logger');
const { errorHandler } = require('./middlewares/errorHandler');
const { familyReunificationRouter } = require('./routers/familyReunification.router');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests from any origin
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/familyReunification', familyReunificationRouter);

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

module.exports = app;
