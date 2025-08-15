import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio: React.FC = () => {
  return (
    <div className="inicio">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Soy <span className="highlight">Luis Majoras</span><br />
                Editor de Videos<br />
                <span className="highlight">Profesional</span>
              </h1>
              <p className="hero-description">
                Transformo tus ideas en contenido viral que
                conecta con tu audiencia. Especializado en videos
                dinámicos y atractivos para todas las plataformas.
              </p>
              <div className="hero-buttons">
                <Link to="/portafolio" className="btn-primary">
                  Ver Portafolio 📹
                </Link>
                <Link to="/contacto" className="btn-secondary">
                  Contactar 💬
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-icon camera">📹</div>
                <div className="floating-icon target">🎯</div>
                <div className="floating-icon star">⭐</div>
                <div className="floating-icon rocket">🚀</div>
                <div className="floating-icon scissors">✂️</div>
              </div>
              <div className="main-circle">
                <div className="inner-circle">
                  <div className="editing-icon">🎬</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
