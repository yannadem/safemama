import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true},
  safety: { type: String, enum: ['safe', 'unsafe', 'caution'], required: true},
  category: {type: String},
  notes: {type: String},
  source: {type: String},
  createdAt: { type: Date, default: Date.now }

});

const Product = mongoose.model('Product', productSchema);

export default Product;