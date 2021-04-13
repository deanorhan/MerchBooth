import { IMerch } from './types';
import { Schema, model } from 'mongoose';

const merchSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

export default model<IMerch>('Merch', merchSchema);
