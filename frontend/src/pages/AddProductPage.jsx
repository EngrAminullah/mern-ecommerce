import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', product);
    alert('Product Added Successfully! 🎉');
    navigate('/admin/products');
    // Later you can save this product to database (backend)
  };

  return (
    <div className="py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Add New Product</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
