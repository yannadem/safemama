import { loadInitialData } from './utils/loadInitialData';

import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  try {

    await mongoose.connect(MONGO_URI!);
    console.log('MongoDB connected');
    await loadInitialData();

  } catch (error) {

    console.log('Error connection MongoDB:', error);

  }
}

export default connectDB;
