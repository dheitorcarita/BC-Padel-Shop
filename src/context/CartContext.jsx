import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, sizeSelected) => {
    const newCartItem = {
      id: cartItems.reduce((maxId, item) => Math.max(maxId, item.id || 0), 0) + 1,
      image: item.image,
      imageAlt: item.imgAlt,
      description: item.description,
      price: item.price,
      size: sizeSelected
    }

    setCartItems((prevItems) => [...prevItems, newCartItem]);
    console.log(cartItems);
    
  };

  const removeFromCart = (id) => {
    console.log(cartItems);
    console.log(id);
    
    
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
