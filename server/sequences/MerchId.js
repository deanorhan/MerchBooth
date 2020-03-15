const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const merchIdSchema = new Schema({
  _id: String,
  sequence_value: Number
});

const MerchId = mongoose.model('MerchId', merchIdSchema);

module.exports = MerchId;
