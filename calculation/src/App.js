import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css';
import Region from './Page/Region/Region';
import Footer from "./Сomponents/Footer/Footer"
import Navbar from "./Сomponents/Navbar/Navbar"
import LocationSPB from './Page/Location/LocationSPB';
import LocationLO from './Page/Location/LocationLO';
import LocationPSK from './Page/Location/LocationPSK';
import LocationNO from './Page/Location/LocationNO';
import LocationSO from './Page/Location/LocationSO';
import LocationBR from './Page/Location/LocationBR';
import LocationTO from './Page/Location/LocationTO';
import LocationMO from './Page/Location/LocationMO';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Region/>}/>
          <Route path="/LocationSPB" element={<LocationSPB />}/>
          <Route path="/LocationLO" element={<LocationLO />}/>
          <Route path="/LocationPSK" element={<LocationPSK />}/>
          <Route path="/LocationNO" element={<LocationNO />}/>
          <Route path="/LocationSO" element={<LocationSO />}/>
          <Route path="/LocationBR" element={<LocationBR />}/>
          <Route path="/LocationTO" element={<LocationTO />}/>
          <Route path="/LocationMO" element={<LocationMO />}/>
            </Routes>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
