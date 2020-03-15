module.exports = {
  dev: process.env.NODE_ENV !== 'production',

  port: process.env.PORT || 4000,
  db_uri: 'mongodb://127.0.0.1:27017/merchbooth'
};
