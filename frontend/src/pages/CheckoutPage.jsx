import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Checkout Successful! Your order is being processed.');
    // Here you could integrate with a real payment API
  };

  return (
    <div className="py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Checkout</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-2xl">Your cart is empty 🛒</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="text-xl font-bold text-blue-800">{item.name}</h2>
                    <p className="text-gray-600">{item.price}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Billing Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <div className="flex justify-between items-center mt-6">
                <h3 className="text-2xl font-semibold text-blue-700">Total: ${calculateTotal()}</h3>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
