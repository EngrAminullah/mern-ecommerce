import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // <-- import

const products = [
  { id: '1', name: "Stylish Jacket", price: "$79", description: "A stylish jacket made of premium materials.", image: "https://images.unsplash.com/photo-1600180758890-6c07a2fbaabf?auto=format&fit=crop&w=300&q=80" },
  { id: '2', name: "Classic Sneakers", price: "$59", description: "Comfortable sneakers perfect for everyday wear.", image: "https://images.unsplash.com/photo-1606813902784-f8787c5f8aa0?auto=format&fit=crop&w=300&q=80" },
  { id: '3', name: "Elegant Watch", price: "$199", description: "A luxurious watch that enhances your style.", image: "https://images.unsplash.com/photo-1586864381150-3e8b4d950b75?auto=format&fit=crop&w=300&q=80" },
];

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);  // <-- use context

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center text-red-500 py-20 text-2xl">Product Not Found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="py-12 px-8 flex flex-col md:flex-row items-center gap-8">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-4">{product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button 
          onClick={handleAddToCart}
          className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
