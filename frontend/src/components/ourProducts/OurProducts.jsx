import React, { useState, useEffect } from 'react';
import ProductCard from '../productCarts/ProductCarts';


const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API and update the 'products' state
    // Replace the placeholder URL with your actual API endpoint
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
