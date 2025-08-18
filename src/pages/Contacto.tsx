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
      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#FFF" d="M12 32L12 8 39 8 39 26 33 32 24 32 18 38 18 32z"></path><path fill="#8E24AA" d="M9,5l-3,7.123V38h9v5h5l5-5h7l10-10V5H9z M38,26l-5,5h-9l-5,5v-5h-6V9h25V26z"></path><path fill="#8E24AA" d="M32 25h-5V15h5V25zM24 25h-5V15h5V25z"></path>
</svg>,
      label: 'Twitch',
      value: 'luis_majoras',
      link: 'https://twitch.tv/luis_majoras'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg>,
      label: 'YouTube',
      value: 'Luis Majoras',
      link: 'https://youtube.com/@luis_majoras?si=SMAMKrvLf6rJ8FrP'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>,
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
