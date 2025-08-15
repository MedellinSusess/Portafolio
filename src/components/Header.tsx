import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              📹 Portafolio de Edición
            </Link>
          </div>
          <nav className="nav">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-mi" 
              className={location.pathname === '/sobre-mi' ? 'nav-link active' : 'nav-link'}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/portafolio" 
              className={location.pathname === '/portafolio' ? 'nav-link active' : 'nav-link'}
            >
              Portafolio
            </Link>
            <Link 
              to="/contacto" 
              className={location.pathname === '/contacto' ? 'nav-link active' : 'nav-link'}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
