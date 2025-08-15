import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/@luis_majoras?si=SMAMKrvLf6rJ8FrP',
      color: '#FF0000'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://www.instagram.com/luis_majoras?igsh=MWQwNDZxOXh1bXBtNg==',
      color: '#E4405F'
    },
    {
      name: 'Twitch',
      icon: '�',
      url: 'https://twitch.tv/luis_majoras',
      color: '#9146FF'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://x.com/luis_majoras?t=St0oqUBFGEEWutxtWZT4PQ&s=09',
      color: '#1DA1F2'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', url: '/' },
    { name: 'Sobre Mí', url: '/sobre-mi' },
    { name: 'Portafolio', url: '/portafolio' },
    { name: 'Contacto', url: '/contacto' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="brand">
              <h3>📹 Luis Majoras - Editor Profesional</h3>
              <p className="brand-description">
                Transformando ideas en contenido viral que conecta con tu audiencia. 
                Especializado en videos dinámicos para todas las plataformas.
              </p>
            </div>
            
            <div className="social-links">
              <h4>Sígueme en:</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="quick-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="services-list">
              <li>📹 Clips de Stream/Podcast</li>
              <li>📱 Videos Verticales</li>
              <li>🎬 Edición en Premiere Pro</li>
              <li>⚡ After Effects</li>
              <li>🎨 Motion Graphics</li>
              <li>🎵 Sound Design</li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p>📧 contacto.luismajoras@gmail.com</p>
              <p>🎮 Streaming en Twitch</p>
              <p>🕒 Lun-Vie: 9:00 AM - 6:00 PM</p>
              <p>⚡ Respuesta en 24-48h</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2025 Luis Majoras - Editor de Video Profesional. Todos los derechos reservados.</p>
            <p className="zelda-tribute">
              Inspirado en la paleta de colores de Majora's Mask ⚔️
            </p>
          </div>
          <div className="footer-links">
            <a href="/terminos">Términos y Condiciones</a>
            <a href="/privacidad">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
