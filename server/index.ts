import dotenv from 'dotenv';
dotenv.config();

import express, {Application} from 'express';
import cors, {CorsOptions} from 'cors';

import router from './routes/products.routes';
import connectDB from './db';



const app : Application = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const corsOptions: CorsOptions = {
  // only allow request from my trusted front end
  origin: CLIENT_URL
}


app.use(cors(corsOptions));
app.use(express.json());
app.use('/products',router);



app.get('/', (req, res)=>{
  res.send('SafeMama API is running');
})

connectDB();

// Do not start the server during testing
if(process.env.NODE_ENV !== 'test'){
  app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
  });
}

export default app;

