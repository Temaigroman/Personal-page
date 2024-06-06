import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css';
import Region from './Page/Region/Region';
import Footer from "./Сomponents/Footer/Footer"
import Navbar from "./Сomponents/Navbar/Navbar"
import LocationAll from './Page/Location/LocationAll'
import LocationSPB from './Page/Location/LocationSPB'
import LocationLO from './Page/Location/LocationLO'
import LocationPSK from './Page/Location/LocationPSK'
import LocationNO from './Page/Location/LocationNO'
import LocationBR from './Page/Location/LocationBR'
import LocationTO from './Page/Location/LocationTO'
import LocationSO from './Page/Location/LocationSO'
import LocationMO from './Page/Location/LocationMO'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Region/>}/>
          <Route  path="/region/SPB" element={<LocationSPB />}/>
          <Route  path="/region/LO" element={<LocationLO />}/>
          <Route  path="/region/PSK" element={<LocationPSK />}/>
          <Route  path="/region/NO" element={<LocationNO />}/>
          <Route  path="/region/BR" element={<LocationBR />}/>
          <Route  path="/region/TO" element={<LocationTO />}/>
          <Route  path="/region/SO" element={<LocationSO />}/>
          <Route  path="/region/MO" element={<LocationMO />}/>
          <Route path="/All" element={<LocationAll/>}/> 
        </Routes>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
