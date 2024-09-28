import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/all');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      setSelectedProduct(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Enter product name"
        value={filter}
        onChange={(e) => {setFilter(e.target.value); 
          console.log(e.target.value);
          setFilteredProducts(products.filter((product) => product.Name.toLowerCase().includes(e.target.value.toLowerCase())));}}
      />

      <div style={{display: 'flex'}}>
        <div><h2>Product List</h2>
          <ul>
            {filteredProducts && (filteredProducts.map((product) => (
              <li key={product._id} onClick={() => handleProductClick(product._id)} style={{ cursor: 'pointer', color: 'white' }}>
                {product.Name} (ID: {product._id})
              </li>
            )))}
          </ul>
        </div>
        {selectedProduct && (
          <div>
            <h3>Selected Product Details</h3>
            <pre>{JSON.stringify(selectedProduct, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
