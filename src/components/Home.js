import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">

      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagenes/fondo.jpg')`,
          backgroundAttachment: 'fixed' 
        }}
      >

        <div className={`hero-content fade-in-element ${isVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">NUEVAS ESENCIAS</h1>
            <p className="hero-subtitle">Descubrí nuestra nueva colección</p>
        </div>
      </section>

      <section className="intro-section">
        <div className={`intro-text fade-in-element ${isVisible ? 'visible' : ''}`}>
          <h2>Perfumes árabes con la esencia más pura</h2>
          <p>Descubrí fragancias únicas que transmiten elegancia, tradición y misterio. Notas intensas y duraderas pensadas para quienes buscan algo distintivo.</p>
        </div>
        
        <img 
          src="/imagenes/perfume.jpg" 
          alt="Logo Noor Essence" 
          className={`intro-logo fade-in-element ${isVisible ? 'visible' : ''}`} 
        />
      </section>
    </div>
  );
};

export default Home;