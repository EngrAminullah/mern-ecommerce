import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "Absolutely love this store! Great quality and fast delivery.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Mike Anderson",
    review: "Best shopping experience ever. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    review: "Amazing collection and top-notch service!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg shadow-lg text-center"
          >
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">{testimonial.name}</h3>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
