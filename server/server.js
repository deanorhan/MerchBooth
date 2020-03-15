const express = require('express');
const bodyParser = require('body-parser');
const boolParser = require('express-query-boolean');
const cors = require('cors');

const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(boolParser());

// Configure the DB connection to MongoDB
require('./config/mongoose');

app.use(require('./routes'));

app.listen(config.port, () => {
  console.log('We have begun');
});
