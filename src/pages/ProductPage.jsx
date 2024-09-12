import { useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cardData from "../cardData";
import { CartContext } from '../context/CartContext';


function ProductPage() {
  const { id } = useParams();
  const product = cardData[id];

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size.label);
    console.log(size);
    
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
    } else {
      alert("Please select a size.");
    }
  };

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            style={{ maxHeight: "663px" }}
          />
        </div>
        <div className="flex flex-col p-4">
          <h1 className="text-3xl font-bold mb-4">{product.description}</h1>
          <p className="text-xl font-semibold mb-6">{product.price}€</p>
          <p className="text-xl font-semibold mb-2">Select the size:</p>
          
          <div className="flex space-x-2 mb-4">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => handleSizeClick(size)}
                className={`w-12 h-12 flex items-center justify-center text-black font-semibold border-2 rounded-lg transition-colors  duration-300 ease-in-out transform hover:scale-105
                   ${
                     selectedSize === size.label
                       ? "bg-lime-400 border-lime-400"
                       : "bg-gray-200 border-gray-400 hover:bg-gray-300"
                   }
                  ${!size.available ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={!size.available} 
              >
                {size.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-auto">
            <button className="bg-lime-400 text-black rounded-xl text-lg font-semibold py-2 px-6 transition-transform duration-300 ease-in-out transform hover:scale-105"  onClick={() => handleAddToCart()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
