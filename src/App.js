import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import './App.css';
import productData from './assets/payload/data.json'; 

function App() {
  // Extract products from the JSON
  const products = productData.data.search.products;

  return (
    <div className="App">
      <h1>Qantas Wine Carousel</h1>
      <Carousel products={products} />
    </div>
  );
}

export default App;