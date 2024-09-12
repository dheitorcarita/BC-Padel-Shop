import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 mb-12 px-6  grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-xl">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center border-b py-4">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold">
                      {item.description}
                    </h2>
                    <p className="text-lg font-medium">{item.price}€ | Size: {item.size}</p>
                  </div>
                  <button
                    className="bg-red-600 text-white text-2xl font-bold rounded-lg px-4 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <div className="p-4 rounded-lg shadow-xl">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">Total Price:</span>
              <span className="text-lg font-semibold">
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
                €
              </span>
            </div>
            <button className="bg-lime-400 text-black rounded-xl text-lg font-semibold px-4 py-2 mt-4 w-full transition-transform duration-300 ease-in-out transform hover:scale-105">
              Finish Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
