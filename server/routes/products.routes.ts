import express from 'express';
import Product from '../models/Product';
import { MongooseBaseQueryOptionKeys } from 'mongoose';
import type {Request, Response} from 'express';

const router = express.Router();

interface RequestParams {}

interface ResponseBody {}

interface RequestBody {}

interface RequestQuery {
  search : string;
  category : string
}

// GET /products ?search

router.get('/', async (req : Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res) => {
  try {
    const {query} = req;

    const searchProduct : string | undefined = query.search;
    const category = req.query.category;

    interface DbQuery {
  name: {$regex: string, $options: string};
  category: string
}
  let dbQuery: Partial<DbQuery> = {};



    if (searchProduct) {
      dbQuery.name = { $regex: searchProduct, $options: 'i' } // no sensisble a mayus y min

    }

    if (category && category !== 'All') {
      dbQuery.category = category;
    }

    const products = await Product.find(dbQuery);


    res.json(products);

  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ error: 'Server error' });
  }

});

  type AssumedBody = {
    name: string;
    safety: 'safe' | 'unsafe' | 'caution';
    category: string;
    notes: string;
    source: string;
  }

// post - Commented out for now because products are only loaded at startup If I want to allow users to add products from the frontend (if i have time today), uncomment this POST route.
router.post('/', async (req, res) => {
  try {
    const { name, safety, category, notes, source }: AssumedBody = req.body;

    if (!name || !safety || !category || !notes || !source) {
       res.status(400).json({ error: 'All fields are required' });
       return;
    }

    const newProduct = new Product({ name, safety, category, notes, source });
    await newProduct.save();
     res.status(201).json(newProduct);


  } catch (error) {
    console.log('Error', error);
     res.status(500).json({ error: 'Server error' });
  }

});



export default router;