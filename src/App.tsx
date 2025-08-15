import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Portafolio from './pages/Portafolio';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
