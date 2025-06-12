import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { loadInitialData } from './utils/loadInitialData';
import router from './routes/products.routes';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
console.log('router:', router);
app.use('/products',router);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
  res.send('SafeMama API is running');
})

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
    loadInitialData();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

