import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-2xl">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-bold text-blue-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">{item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="text-right mt-10">
          <h2 className="text-3xl font-bold text-blue-800">
            Total: ${calculateTotal()}
          </h2>
          <Link to="/checkout">
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
