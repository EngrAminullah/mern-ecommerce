import React from 'react';
import { Link } from 'react-router-dom';  // <-- import Link

const products = [
  { id: '1', name: "Stylish Jacket", price: "$79", image: "https://images.unsplash.com/photo-1600180758890-6c07a2fbaabf?auto=format&fit=crop&w=300&q=80" },
  { id: '2', name: "Classic Sneakers", price: "$59", image: "https://images.unsplash.com/photo-1606813902784-f8787c5f8aa0?auto=format&fit=crop&w=300&q=80" },
  { id: '3', name: "Elegant Watch", price: "$199", image: "https://images.unsplash.com/photo-1586864381150-3e8b4d950b75?auto=format&fit=crop&w=300&q=80" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold text-blue-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
