import express from 'express';
import Product from '../models/Product.js';



const router = express.Router();

// GET /products   

router.get('/', async (req, res)=>{ 
  try {
    const products = await Product.find();
    res.json(products);

  } catch(error){
    console.log('Error', error);
    res.status(500).json({error: 'Server error'});
  }

});

export default router;