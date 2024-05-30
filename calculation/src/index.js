import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Сomponents/Navbar/Navbar';
import Footer from './Сomponents/Footer/Footer';
import Region from './Page/Region/Region';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Region/>
    <Footer />
    
  </React.StrictMode>
);
