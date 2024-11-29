import React, { useState } from 'react'

import './App.css'
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <Header />
      <div className="slider">
        <img src="https://images.unsplash.com/photo-1605522283494-4901a98d458e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slider" style={{width: "100%", height:"100%"}} />
      </div>
      <div className="content" style={{padding: "20px"}}>
        <h1> Welcome to Foodpanda</h1>
        <p>We serve all your food needs</p>
        <div className="cityList" style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
          <div style={{fontWeight: "bold", border: "1px solid #ccc", padding:"10px"}}>Dhaka</div>
          <div style={{fontWeight: "bold", border: "1px solid #ccc", padding:"10px"}}>Chittagong</div>
          <div style={{fontWeight: "bold", border: "1px solid #ccc", padding:"10px"}}>Khulna</div>
        </div>
      </div>
      <Header />
      
      <Footer />
    </>
  );
}

export default App
