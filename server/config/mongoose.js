const mongoose = require('mongoose');
const config = require('./');

mongoose.connect(config.db_uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

if (config.dev) {
  mongoose.set('debug', true);
}

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
}).catch((error) => {
  console.log(error);
});

connection.on('error', console.error);
