import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc   Get all products
// @route  GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// @desc   Create new product
// @route  POST /api/products
router.post('/', async (req, res) => {
  const { name, price, quantity, image, description } = req.body;

  // Validate fields
  if (!name || !price || !quantity || !image || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const product = new Product({
      name,
      price,
      quantity,
      image,
      description,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create product' });
  }
});

// @desc   Delete a product
// @route  DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.remove();
    res.json({ message: 'Product removed' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
});

export default router;
