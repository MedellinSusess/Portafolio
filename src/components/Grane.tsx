import React from 'react';
import './Grane.css';

interface GraneProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    type: 'video' | 'image';
    url: string;
    title: string;
  } | null;
}

const Grane: React.FC<GraneProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="grane-overlay" onClick={handleBackdropClick}>
      <div className="grane-container">
        <button className="grane-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="grane-content">
          <h2 className="grane-title">{content.title}</h2>
          
          {content.type === 'video' ? (
            <div className="video-container">
              <video 
                controls 
                autoPlay 
                className="grane-video"
                src={content.url}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          ) : (
            <div className="image-container">
              <img 
                src={content.url} 
                alt={content.title}
                className="grane-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grane;
