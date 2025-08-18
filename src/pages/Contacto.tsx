import React from 'react';
import './Contacto.css';

const Contacto: React.FC = () => {


  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'contacto.luismajoras@gmail.com',
      link: 'mailto:contacto.luismajoras@gmail.com'
    },
    {
      icon: '🎮',
      label: 'Twitch',
      value: 'luis_majoras',
      link: 'https://twitch.tv/luis_majoras'
    },
    {
      icon: '�',
      label: 'YouTube',
      value: 'Luis Majoras',
      link: 'https://youtube.com/@luis_majoras?si=SMAMKrvLf6rJ8FrP'
    },
    {
      icon: '�',
      label: 'Instagram',
      value: '@luis_majoras',
      link: 'https://www.instagram.com/luis_majoras?igsh=MWQwNDZxOXh1bXBtNg==',
    }
  ];

  return (
    <div className="contacto">
      <div className="container">
        <div className="hero-section">
          <h1 className="section-title">Contáctame</h1>
          <p className="section-subtitle">
            ¿Tienes un proyecto increíble? ¡Hablemos y creemos
            algo épico juntos!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p className="info-description">
              Estoy aquí para ayudarte a crear contenido increíble que conecte con tu audiencia.
            </p>

            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index} 
                  href={contact.link} 
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <h4>🕒 Disponibilidad</h4>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Tiempo de respuesta: 24-48 horas</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>¿Cómo enviar tu correo?</h3>
            <div className="email-format-box">
              <p>Para agilizar tu cotización, por favor incluye en tu correo:</p>
              <ul>
                <li><b>Nombre:</b> (Tu nombre o el de tu empresa)</li>
                <li><b>Asunto:</b> (Motivo del contacto)</li>
                <li><b>Descripción del proyecto:</b> (¿Qué necesitas? ¿Qué tipo de video? ¿Duración? ¿Plataforma?)</li>
                <li><b>Presupuesto estimado:</b> (Opcional, pero ayuda a ajustar la propuesta)</li>
                <li><b>Plazo o fecha límite:</b> (¿Para cuándo lo necesitas?)</li>
                <li><b>Datos de contacto:</b> (Correo, redes, etc.)</li>
              </ul>
              <p>Puedes escribir directamente a <a href="mailto:contacto.luismajoras@gmail.com">contacto.luismajoras@gmail.com</a> o usar los enlaces de redes sociales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
