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

  // Función para codificar URLs correctamente
  const encodeImageUrl = (url: string) => {
    return url.replace(/\s+/g, '%20');
  };

  // Portfolio real con videos y tarifas de Luis Majoras
  const portfolioItems: PortfolioItem[] = [
    // Tarifas y Servicios
    {
      id: 1,
      title: 'Precios - Videos Verticales',
      description: 'Tarifas para TikToks, Reels y Shorts - Contenido vertical optimizado.',
      category: 'tarifas',
      type: 'image',
      url: '/Media/Video Vertical.png', //Url de la imagen
      thumbnail: '/Media/Video Vertical.png' //url de la miniatura
    },
    {
      id: 2,
      title: 'Términos y Condiciones',
      description: 'Información sobre términos de servicio, políticas y condiciones de trabajo.',
      category: 'tarifas',
      type: 'image',
      url: '/Media/terminos y condiciones.png', //Url de la imagen
      thumbnail: '/Media/terminos y condiciones.png' //url de la miniatura
    },
    {
      id: 3,
      title: 'Precios - Clips de Stream/Podcast',
      description: 'Tabla de precios para edición de clips de streams y podcasts.',
      category: 'tarifas',
      type: 'image',
      url: '/Media/Clip.png', //Url de la imagen
      thumbnail: '/Media/Clip.png' //url de la miniatura
    },
    
    // Videos Verticales (TikToks, Reels, Shorts)
    {
      id: 4,
      title: 'Temu - @punkmacarroni',
      description: 'Video vertical promocional para TikTok/Reels con edición dinámica.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532273/temu_punkmacarroni_laiike.mp4', //Url del video
      thumbnail: '/Media/temu@punkmacarroni.png' //Url de la miniatura
    },
    {
      id: 5,
      title: 'Presentación - @mishishitas',
      description: 'Video de presentación vertical con animaciones y transiciones.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532124/presentaci%C3%B3n_mishishitas_zozasu.mp4', //Url del video
      thumbnail: '/Media/presentación@mishishitas.png' //Url de la miniatura
    },
    {
      id: 6,
      title: 'Presentación - @annicitta_',
      description: 'Video de introducción personalizado para redes sociales.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532136/presentaci%C3%B3n_annicitta__lodt4v.mp4',
      thumbnail: '/Media/presentación@annicitta_.png' //Url de la miniatura
    },
    {
      id: 7,
      title: 'Pokemon TCG - @punkmacarroni',
      description: 'Contenido gaming vertical para TikTok con efectos especiales.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532180/pokemonTCG_punkmacarroni_dgdwn0.mp4', //Url del video
      thumbnail: '/Media/pokemonTCG@punkmacarroni.png' //Url de la miniatura
    },
    {
      id: 8,
      title: 'Frieren - @elpsyotaku',
      description: 'Video vertical de anime con edición cinematográfica.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755533849/frieren-elpsyotaku_tgNkndJC_qkf9lm.mp4', //Url del video
      thumbnail: '/Media/frieren@ConductaVerbal.png' //Url de la miniatura
    },
    {
      id: 9,
      title: 'Canto - @psiconido1',
      description: 'Clip musical vertical con sincronización de audio.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/image/upload/v1755534261/canto_psiconido1_za0zqy.png',//Url  del video
      thumbnail: '/Media/canto@psiconido1.png'//Url de la miniatura
    },
    {
      id: 10,
      title: 'Consejos - @psiconido1',
      description: 'Video educativo con overlays de texto y animaciones.',
      category: 'verticales',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755535014/consejos-psiconido1_xB18yhvj_bzqaag.mp4', //Url del video
      thumbnail: '/Media/consejos@psiconido1.png' //Url de la miniatura
    },
    
    // Clips de Stream/Podcast
    {
      id: 11,
      title: 'Pollito - @pinkbunnny11',
      description: 'Clip destacado de stream con momentos divertidos.',
      category: 'clips',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532139/pollito_pinkbunnny11_z4zqip.mp4', //Url del video
      thumbnail: '/Media/pollito@pinkbunnny11.png' //Url de la miniatura
    },
    {
      id: 12,
      title: 'Mando - @luis_majoras',
      description: 'Clip gaming con reacciones y highlights del stream.',
      category: 'clips',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532144/mando_luis_majoras_jzcapc.mp4', //Url del video
      thumbnail: '/Media/mando@luis_majoras.png' //Url de la miniatura
    },
    {
      id: 13,
      title: 'Traición - @luis_majoras',
      description: 'Momento épico de gaming capturado en clip dinámico.',
      category: 'clips',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532199/traicion_luis_majoras_wcqllr.mp4', //Url del video
      thumbnail: '/Media/traicion@luis_majoras.png' //Url de la miniatura
    },
    {
      id: 14,
      title: 'Delicioso - @ConductaVerbal',
      description: 'Clip de podcast con edición de audio y visuales.',
      category: 'clips',
      type: 'video',
      url: 'https://res.cloudinary.com/dstrdougk/video/upload/v1755532207/delicioso_ConductaVerbal_q10weg.mp4', //Url del video
      thumbnail: '/Media/delicioso@Conductaverbal.png' //Url de la miniatura
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
              style={{ '--bg-image': `url("${encodeImageUrl(item.thumbnail)}")` } as React.CSSProperties}
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
