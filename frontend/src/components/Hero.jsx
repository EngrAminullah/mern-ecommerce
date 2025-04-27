import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-blue-50 h-[90vh]">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-blue-700 mb-6"
      >
        Discover Your Style
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg md:text-2xl text-gray-600 mb-8"
      >
        Shop the latest trends and timeless classics
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold"
      >
        Shop Now
      </motion.button>
    </section>
  );
};

export default Hero;
