import React, { useState } from 'react';
import Grane from '../components/Grane';
import './Portafolio.css';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'todos' | 'clips' | 'verticales' | 'tarifas';
  type: 'video' | 'image';
  url: string;
  thumbnail: string;
}

const Portafolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'clips' | 'verticales' | 'tarifas'>('todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isGraneOpen, setIsGraneOpen] = useState(false);

  // Datos de ejemplo - Aquí puedes agregar tus proyectos reales
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Precios - Clips de Stream/Podcast',
      description: 'Tabla de precios para edición de clips de streams y podcasts.',
      category: 'clips',
      type: 'image',
      url: '/api/placeholder/800/600', // Reemplaza con tu imagen real
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Precios - Videos Verticales',
      description: 'Tarifas para creación y edición de videos verticales (TikTok, Reels, Shorts).',
      category: 'verticales',
      type: 'image',
      url: '/api/placeholder/800/600', // Reemplaza con tu imagen real
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Términos y Condiciones',
      description: 'Información sobre términos de servicio, políticas y condiciones de trabajo.',
      category: 'tarifas',
      type: 'image',
      url: '/api/placeholder/800/600', // Reemplaza con tu imagen real
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Clip de Gaming - Highlights',
      description: 'Edición dinámica de momentos destacados de streams de gaming.',
      category: 'clips',
      type: 'video',
      url: '/api/placeholder/video', // Reemplaza con tu video real
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'TikTok Viral - Tendencias',
      description: 'Video vertical optimizado para TikTok siguiendo tendencias actuales.',
      category: 'verticales',
      type: 'video',
      url: '/api/placeholder/video', // Reemplaza con tu video real
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Podcast Highlights',
      description: 'Momentos destacados de podcast con animaciones y texto dinámico.',
      category: 'clips',
      type: 'video',
      url: '/api/placeholder/video', // Reemplaza con tu video real
      thumbnail: '/api/placeholder/400/300'
    }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsGraneOpen(true);
  };

  const handleCloseGrane = () => {
    setIsGraneOpen(false);
    setSelectedItem(null);
  };

  const filters = [
    { key: 'todos' as const, label: '📂 Todos', icon: '📂' },
    { key: 'clips' as const, label: '🎥 Clips Stream/Podcast', icon: '🎥' },
    { key: 'verticales' as const, label: '📱 Videos Verticales', icon: '📱' },
    { key: 'tarifas' as const, label: '🏷️ Tarifas y Servicios', icon: '🏷️' }
  ];

  return (
    <div className="portafolio">
      <div className="container">
        <div className="hero-section">
          <h1 className="section-title">Portafolio</h1>
          <p className="section-subtitle">
            Descubre los proyectos que he creado para transformar
            ideas en contenido de calidad
          </p>
        </div>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-card"
              onClick={() => handleItemClick(item)}
            >
              <div className="card-image">
                <img src={item.thumbnail} alt={item.title} />
                <div className="card-overlay">
                  <div className="play-button">
                    {item.type === 'video' ? '▶️' : '🖼️'}
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <button className="view-btn">
                  {item.type === 'video' ? 'Ver Video' : 'Ver Imagen'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <h3>No hay proyectos en esta categoría</h3>
            <p>Pronto agregaré más contenido aquí.</p>
          </div>
        )}
      </div>

      <Grane 
        isOpen={isGraneOpen}
        onClose={handleCloseGrane}
        content={selectedItem ? {
          type: selectedItem.type,
          url: selectedItem.url,
          title: selectedItem.title
        } : null}
      />
    </div>
  );
};

export default Portafolio;
