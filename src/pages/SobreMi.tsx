import React from 'react';
import './SobreMi.css';

const SobreMi: React.FC = () => {
  const skills = [
    { name: 'Clips de Stream/Podcast', level: 95, icon: '🎥' },
    { name: 'Videos Verticales (TikTok/Reels)', level: 90, icon: '📱' },
    { name: 'Adobe Premiere Pro', level: 85, icon: '🎬' },
    { name: 'After Effects', level: 80, icon: '⚡' },
    { name: 'Motion Graphics', level: 75, icon: '🎨' },
    { name: 'Sound Design', level: 70, icon: '🎵' }
  ];

  const stats = [
    { number: '200+', label: 'Clips Editados' },
    { number: '11', label: 'Videos de Muestra' },
    { number: '100%', label: 'Satisfacción Cliente' }
  ];

  return (
    <div className="sobre-mi">
      <div className="container">
        <div className="hero-section">
          <h1 className="section-title">Luis Majoras</h1>
          <p className="section-subtitle">
            Editor de video profesional con pasión por crear contenido
            que impacta
          </p>
        </div>

        <div className="content-grid">
          <div className="story-section">
            <div className="story-card">
              <h3>Mi Historia</h3>
              <p>
                Soy editor de video especializado en contenido para redes sociales, 
                con experiencia en streamers y creadores de contenido. Mi enfoque está en 
                crear clips dinámicos y videos que generen engagement y hagan crecer tu audiencia.
              </p>
              <p>
                Mi especialidad incluye clips de streams y podcasts, además de videos verticales 
                optimizados para TikTok, Instagram Reels y YouTube Shorts. Cada proyecto está 
                diseñado para maximizar el impacto y conectar con tu público.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>Habilidades Legendarias</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-percentage">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
