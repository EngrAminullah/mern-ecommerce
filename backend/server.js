import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';   // <-- for colored console logs
import mongoose from 'mongoose';
import cors from 'cors';

import connectDB from './config/db.js';  // <-- connect to MongoDB
import productRoutes from './routes/productRoutes.js'; // <-- import product routes

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Create express app
const app = express();

// Middlewares
app.use(cors());               // Allow frontend to talk to backend
app.use(express.json());       // To accept JSON body data

// Routes
app.use('/api/products', productRoutes);  // Mount the product routes

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);
