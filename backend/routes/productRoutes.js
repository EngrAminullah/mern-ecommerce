import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc   Get all products
// @route  GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // Send back the products
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving products' });
  }
});

// @desc   Create new product
// @route  POST /api/products
router.post('/', async (req, res) => {
  try {
    const { name, price, quantity, image, description } = req.body;

    const product = new Product({
      name,
      price,
      quantity,
      image,
      description,
    });

    const createdProduct = await product.save(); // Save to database
    res.status(201).json(createdProduct); // Return created product
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
});

// @desc   Delete a product
// @route  DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product' });
  }
});

export default router;
