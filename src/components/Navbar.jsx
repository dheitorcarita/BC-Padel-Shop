import React, { useContext } from "react";
import { FaInstagram, FaFacebook, FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const getCartItemCount = () => cartItems.length;

  return (
    <nav className="h-20 bg-gray-800 text-white flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <a href="/">
          <img src="/bc-padel-logo.webp" alt="bc-padel-logo" className="h-12 w-auto"/>
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="https://www.instagram.com/bc.padel" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.facebook.com/bcpadels" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <div className="relative">
          <a href="/cart">
            <FaShoppingCart size={30} />
          </a>
          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ">
              {getCartItemCount()}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
