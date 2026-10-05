import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Konfigurasi animasi yang lebih elegan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda antar elemen muncul
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Jarak pergerakan lebih pendek (20px)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section className="hero" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
          style={{ textAlign: 'center' }}
        >
          <div className="scan-line"></div>

          {/* Badge AI-MOBILE-WEB-APPS-AUTOMATION-CYBER SECURITY */}
          <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block', // Diperbaiki dari '-'
              padding: '8px 24px',
              background: 'rgba(0, 243, 255, 0.05)', // Background lebih transparan
              borderRadius: '50px',
              border: '1px solid rgba(0, 243, 255, 0.2)',
              letterSpacing: '1px'
            }}>
              <span style={{
                color: 'var(--primary, #00f3ff)',
                fontSize: '0.9rem', // Diperkecil agar lebih elegan
                fontWeight: '500',
                fontFamily: "'Orbitron', sans-serif"
              }}>
                AI • MOBILE • WEB • APPS • AUTOMATION • CYBER SECURITY
              </span>
            </div>
          </motion.div>

          {/* Judul Utama */}
          <motion.h1 variants={itemVariants} style={{ marginBottom: '20px' }}>
            <span style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '-1px'
            }}>
              Software Engineer
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p variants={itemVariants} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '40px',
            maxWidth: '600px', // Dipersempit agar lebih mudah dibaca
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'rgba(255, 255, 255, 0.7)', // Warna sedikit diredupkan
            fontFamily: "'Inter', 'Arial', sans-serif", // Font yang lebih netral
            fontWeight: '400'
          }}>
            Bringing the future into every line of code.
          </motion.p>

          {/* Tombol Lihat Projek */}
          <motion.div variants={itemVariants} style={{ marginBottom: '80px' }}>
            <button
              onClick={scrollToProjects}
              className="btn btn-primary" // Menghapus hover-3d
              style={{
                padding: '16px 40px',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                cursor: 'pointer',
                borderRadius: '8px',
                border: 'none',
                background: 'var(--primary, #00f3ff)',
                color: '#000',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              My Projects <FaArrowRight />
            </button>
          </motion.div>

          {/* Scroll Indicator yang lebih tenang */}
          <motion.div variants={itemVariants}>
            <div
              onClick={scrollToProjects}
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                letterSpacing: '2px',
                textTransform: 'uppercase'
            }}>
              <div>Scroll</div>
              <div style={{
                width: '24px',
                height: '40px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <motion.div
                  animate={{ y: [4, 20, 4], opacity: [0.5, 1, 0.5] }} // Gerakan halus dari atas ke bawah
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  style={{
                    width: '4px',
                    height: '6px',
                    background: 'var(--primary, #00f3ff)',
                    borderRadius: '2px',
                    position: 'absolute',
                    top: '4px'
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