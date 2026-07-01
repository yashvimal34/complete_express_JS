import express from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

export const productRouter = express.Router();

productRouter.post('/create', createProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);