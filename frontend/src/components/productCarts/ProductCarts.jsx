import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img
        src={product.image} // Assuming your API provides an 'image' property
        alt={product.name} // Assuming your API provides a 'name' property
        className="w-full h-32 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-500">{product.price}</span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
