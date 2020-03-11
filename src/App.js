import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Hero/>
      <Products/>
    </div>
  );
}

export default App;
