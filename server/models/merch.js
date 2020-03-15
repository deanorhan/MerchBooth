const mongoose = require('mongoose');

const merchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Merch', merchSchema);
