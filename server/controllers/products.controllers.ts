import Product from '../models/Product';
import { Request, Response } from 'express';


type RequestBody = {
  name: string;
  safety: 'safe' | 'unsafe' | 'caution';
  category: string;
  notes: string;
  source: string;
}

interface RequestQuery {
  search: string;
  category: string
}

interface DbQuery {
  name: { $regex: string, $options: string };
  category: string
}

async function getProducts (req: Request<{}, {}, {}, RequestQuery>, res: Response) {
  try {
    const { query } = req;

    const searchProduct: string | undefined = query.search;
    const category = req.query.category;

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

};



async function postProduct (req: Request<{}, {}, RequestBody, {}>, res: Response) {

  try {
    const { name, safety, category, notes, source }: RequestBody = req.body;

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

};

export { getProducts, postProduct }

