import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from "./component/Products";
import Rating from "./component/Rating";

function App() {
  return (
   <div>
     <Products />
     <Rating rating = '4'></Rating>
   </div>
  );
}

export default App;
