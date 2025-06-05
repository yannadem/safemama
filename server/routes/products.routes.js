import express from 'express';
import Product from '../models/Product.js';



const router = express.Router();

// GET /products ?search

router.get('/', async (req, res)=>{ 
  try {
    const searchProduct = req.query.search;

    let products;

    if(searchProduct) {
      const regex = new RegExp(searchProduct, 'i'); // not case sensitive
      products = await Product.find({name: regex});

    } else {
      console.log('🔍 GET /products called');
      console.log('Search query:', searchProduct);

      products = await Product.find();
    }

    res.json(products);

  } catch(error){
    console.log('Error', error);
    res.status(500).json({error: 'Server error'});
  }

});

export default router;