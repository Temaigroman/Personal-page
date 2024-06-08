import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css';
import Region from './Page/Region/Region';
import Footer from "./Сomponents/Footer/Footer"
import Navbar from "./Сomponents/Navbar/Navbar"
import LocationAll from './Page/Location/LocationAll'
/* СПБ и ЛО */
import LocationSPB from './Page/Location/LocationSPB'
import LocationLO from './Page/Location/LocationLO'
import LocationPSK from './Page/Location/LocationPSK'
import LocationNO from './Page/Location/LocationNO'
import LocationBR from './Page/Location/LocationBR'
import LocationTO from './Page/Location/LocationTO'
import LocationSO from './Page/Location/LocationSO'
import LocationMO from './Page/Location/LocationMO'
import WorksMP from './Page/Works/WorksMP';
import WorksEKAT from './Page/Works/WorksEKAT';
import WorksKOLP from './Page/Works/WorksKOLP';
import WorksVOLH from './Page/Works/WorksVOLH';
import WorksSHUS from './Page/Works/WorksSHUS';
import WorksPARNAS from './Page/Works/WorksPARNAS';
import WorksVIBO from './Page/Works/WorksVIBO';
import WorksGATCH from './Page/Works/WorksGATCH';
import WorksTOS from './Page/Works/WorksTOS';
import WorksNOVOSARAT from './Page/Works/WorksNOVOSARAT';
import WorksPISK from './Page/Works/WorksPISK';
/* Псковская область */
import WorksPSK from './Page/Works/WorksPSK';
import WorksVL from './Page/Works/WorksVL';
import WorksOSTROV from './Page/Works/WorksOSTROV';
import WorksNEV from './Page/Works/WorksNEV';
import WorksSU from './Page/Works/WorksSU';
import WorksPORH from './Page/Works/WorksPORH';

import WorksNOV from './Page/Works/WorksNOV';

import WorksTVER from './Page/Works/WorksTVER';

import WorksBR from './Page/Works/WorksBR1';
import WorksBR2 from './Page/Works/WorksBR2';

import WorksSMOL from './Page/Works/WorksSMOL';

import WorksPOD from './Page/Works/WorksPOD';
import WorksELECTRO from './Page/Works/WorksELECTRO';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Блок с главной страницей и регионами */}
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
          {/* Блок со страницами должностей на участках */}
          <Route path="/region/SPB/MP/" element={<WorksMP/>}/>
          <Route path="/region/SPB/EKAT/" element={<WorksEKAT/>}/>

          <Route path="/region/LO/KOLP/" element={<WorksKOLP/>}/>
          <Route path="/region/LO/VOLH/" element={<WorksVOLH/>}/>
          <Route path="/region/LO/SHUS/" element={<WorksSHUS/>}/>
          <Route path="/region/LO/PISK/" element={<WorksPISK/>}/>
          <Route path="/region/LO/PARNAS/" element={<WorksPARNAS/>}/>
          <Route path="/region/LO/VIBO/" element={<WorksVIBO/>}/>
          <Route path="/region/LO/GATCH/" element={<WorksGATCH/>}/>
          <Route path="/region/LO/TOS/" element={<WorksTOS/>}/>
          <Route path="/region/LO/NOVOSARAT/" element={<WorksNOVOSARAT/>}/>

          <Route path="/region/PSK/PSKOV/" element={<WorksPSK/>}/>
          <Route path="/region/PSK/VL/" element={<WorksVL/>}/>
          <Route path="/region/PSK/OSTROV/" element={<WorksOSTROV/>}/>
          <Route path="/region/PSK/NEV/" element={<WorksNEV/>}/>
          <Route path="/region/PSK/SUCHOVO/" element={<WorksSU/>}/>
          <Route path="/region/PSK/PORH/" element={<WorksPORH/>}/>

          <Route path="/region/NO/NOV" element={<WorksNOV/>}/>

          <Route path="/region/TO/TVER" element={<WorksTVER/>}/>

          <Route path="/region/BR/BR-1" element={<WorksBR/>}/>
          <Route path="/region/BR/BR-2" element={<WorksBR2/>}/>

          <Route path="/region/SO/SMOL" element={<WorksSMOL/>}/>
          
          <Route path="/region/MO/POD/" element={<WorksPOD/>}/>
          <Route path="/region/MO/ELECTRO/" element={<WorksELECTRO/>}/>
          

        </Routes>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
