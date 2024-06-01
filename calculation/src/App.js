import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Сomponents/Navbar/Navbar';
import Footer from './Сomponents/Footer/Footer';
import Region from './Page/Region/Region';
import Location from './Page/Location/Location';
import Works from './Page/Works/Works';
import LocationSPB from './Page/Location/LocationSPB';


function App() {
  return (
    <div className="App">
       <Navbar />
    {/* <Region /> */}
    <Location/>
    {/* <Works /> 
    <Footer /> */}

    </div>
  );
}


export default App;