// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';

import { getProducts } from '../services/contentful';
import './hero.css';

const Hero = () => {
  const [heroImage, setHeroImage] = useState('');

  useEffect(() => {
    const fetchRandomProduct = async () => {
      const data = await getProducts();

      if (data && data.length > 0) {
        // ambil random product
        const randomProduct = data[Math.floor(Math.random() * data.length)];
        const img = randomProduct.fields?.image;

        if (img) {
          setHeroImage(img);
        }
      }
    };

    fetchRandomProduct();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <h1 className="hero-title">
              Wewangian Premium untuk Pria <span className="text-gold">Sejati</span>
            </h1>
            <p className="hero-subtitle">
              Koleksi eksklusif parfum yang dibuat khusus untuk membangun kepribadian Anda. 
              Setiap tetes membawa cerita prestasi, kepercayaan diri, dan gaya hidup premium.
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary">Temukan Wewangian Anda</button>
              <button className="btn btn-secondary">Pelajari Lebih</button>
            </div>

            <div className="hero-badge">
              <span>✓ Bahan Alami Premium</span>
              <span>✓ Tahan Hingga 12 Jam</span>
              <span>✓ Garansi Kepuasan 100%</span>
            </div>
          </div>

          {/* HERO IMAGE DARI PRODUCT */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">

              {heroImage ? (
                <img src={heroImage} alt="hero product" className="hero-img"/>
              ) : (
                <p>Loading...</p>
              )}

              <div className="hero-glow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
