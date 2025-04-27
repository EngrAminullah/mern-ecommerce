import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Accessories", image: "https://images.unsplash.com/photo-1586864381150-3e8b4d950b75?auto=format&fit=crop&w=500&q=80" },
];

const Categories = () => {
  return (
    <section className="py-12 px-8 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <motion.div 
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-2xl font-semibold text-center text-blue-800">{cat.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
