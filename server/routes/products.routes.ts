import express from 'express';
import {getProducts, postProduct, deleteProduct} from '../controllers/products.controllers'

const router = express.Router();

router.get('/', getProducts);

router.post('/', postProduct);

router.delete('/:id', deleteProduct);

export default router;