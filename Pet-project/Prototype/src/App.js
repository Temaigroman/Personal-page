import './styels/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop';

import Navbar from './components/navbar/Navbar';
import Fotter from './components/fotter/Fotter';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;