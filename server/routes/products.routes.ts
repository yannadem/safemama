import express from 'express';
import {getProducts, postProduct} from '../controllers/products.controllers'

const router = express.Router();

router.get('/', getProducts);

router.post('/', postProduct);

export default router;