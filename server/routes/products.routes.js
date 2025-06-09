import express from 'express';
import Product from '../models/Product.js';



const router = express.Router();

// GET /products ?search

router.get('/', async (req, res) => {
  try {
    const searchProduct = req.query.search;
    const category = req.query.category;

    let query = {};

    if (searchProduct) {
      query.name = { $regex: searchProduct, $options: 'i' } // no sensisble a mayus y min

    }

    if (category && category !== 'All') {
      query.category = category;
    }

    const products = await Product.find(query);


    res.json(products);

  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ error: 'Server error' });
  }

});

// post - Commented out for now because products are only loaded at startup If I want to allow users to add products from the frontend (if i have time today), uncomment this POST route.
router.post('/', async (req, res) => {
  try {
    const { name, safety, category, notes, source } = req.body;

    if (!name || !safety || !category || !notes || !source) {
      return res.status(400).json({ error: 'All fields are required' });
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