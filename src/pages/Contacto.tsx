import React, { useState } from 'react';
import './Contacto.css';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

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
            <h3>Envía tu Mensaje</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  placeholder="Cuéntame sobre tu proyecto, ideas, timeline, presupuesto, etc."
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
