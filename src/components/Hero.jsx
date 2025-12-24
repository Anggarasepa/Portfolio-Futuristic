import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  // Fungsi untuk scroll ke section Projects
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
          style={{ textAlign: 'center' }}
        >
          <div className="scan-line"></div>
          
          {/* Badge AI-MOBILE-WEB DEVELOPER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: '40px' }}
          >
            <div style={{
              display: '-',
              padding: '10px 30px',
              background: 'rgba(0, 243, 255, 0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(0, 243, 255, 0.3)',
              marginBottom: '30px'
            }}>
              <span style={{
                color: 'var(--primary)',
                fontSize: '1.6rem',
                fontWeight: '600',
                fontFamily: "'Orbitron', sans-serif"
              }}>
                AI - MOBILE - WEB
                <br/>
                DEVELOPER
              </span>
            </div>
          </motion.div>
          
          {/* Judul Utama */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginBottom: '30px' }}
          >
            <span className="glitch-text" data-text="INNOVATOR">INNOVATOR</span>
          </motion.h1>
          
          {/* PERUBAHAN DI SINI: Text tanpa box */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontSize: '1.1rem', // Perbaiki: '1.1 rem' jadi '1.1rem'
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'Orbitron', 'Arial', sans-serif", // Font sama
              letterSpacing: '1.5px',
              fontWeight: '700'
            }}
          >
            Membawa masa depan kedalam setiap baris kode
          </motion.p>
          
          {/* Tombol Lihat Projek */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ marginBottom: '80px' }}
          >
            <button 
              onClick={scrollToProjects}
              className="btn btn-primary hover-3d" 
              style={{
                padding: '18px 45px',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                margin: '0 auto',
                cursor: 'pointer'
              }}
            >
              Lihat Projek <FaArrowRight />
            </button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToProjects}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ 
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.9rem'
            }}>
              <div>Scroll untuk menjelajahi</div>
              <div style={{
                width: '30px',
                height: '50px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                position: 'relative'
              }}>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{
                    width: '6px',
                    height: '12px',
                    background: 'var(--primary)',
                    borderRadius: '3px',
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;