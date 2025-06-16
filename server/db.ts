const mongoose = require('mongoose');
async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/safemama');
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connection MongoDB:', error);
  }
}

export default connectDB;