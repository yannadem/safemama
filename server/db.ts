const mongoose = require('mongoose');
import { loadInitialData } from './utils/loadInitialData';


async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/safemama');
    console.log('MongoDB connected');
    loadInitialData();
  } catch (error) {
    console.log('Error connection MongoDB:', error);
  }
}

export default connectDB;

// mongoose.connect(process.env.MONGO_URI!)
//   .then(() => {
//     console.log('Connected to MongoDB');

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });