import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$20', quantity: 5 },
    { id: 2, name: 'Product 2', price: '$30', quantity: 10 },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Manage Products</h1>
      
      <div className="flex justify-end mb-6">
      <Link to="/admin/products/add">
        <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-xl">
          Add New Product
        </button>
      </Link>
    </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 text-2xl">No products available.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-blue-50 p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-blue-800">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <p className="text-gray-500">Quantity: {product.quantity}</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg">Edit</button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProductsPage;
