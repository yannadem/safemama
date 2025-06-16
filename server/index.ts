import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/products.routes';
import connectDB from './db';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
  res.send('SafeMama API is running');
})

connectDB()

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});

export default app;

