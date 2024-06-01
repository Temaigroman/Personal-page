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
import LocationAll from './Page/Location/LocationAll';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Region/>}/>
          <Route path="/:id" element={<LocationSPB />}/>
          <Route path="/:id" element={<LocationLO />}/>
          <Route path="/:id" element={<LocationPSK />}/>
          <Route path="/:id" element={<LocationNO />}/>
          <Route path="/:id" element={<LocationSO />}/>
          <Route path="/:id" element={<LocationBR />}/>
          <Route path="/:id" element={<LocationTO />}/>
          <Route path="/:id" element={<LocationMO />}/>
           <Route path="/LocationAll" element={<LocationAll />}/> 
            </Routes>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
