import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' }, // Sekarang punya ID sendiri
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // === FUNGSI NAVIGASI OTOMATIS (LEBIH CERDAS) ===
  const scrollToSection = (id) => {
    setIsOpen(false);
    setActiveLink(id);
    
    // 1. Khusus Home, balik ke paling atas
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // 2. Untuk ID lainnya (skills, projects, contact, about)
    // Kita cari elemen berdasarkan ID-nya langsung
    const section = document.getElementById(id);
    
    if (section) {
      const headerHeight = 80; // Tinggi header agar judul tidak tertutup
      const sectionTop = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    } else if (id === 'about') {
      // Fallback khusus About jika tidak ada ID #about (scroll ke Hero)
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        window.scrollTo({ top: heroSection.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  const scrollToHome = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveLink('home');
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header glass"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 0'
      }}
    >
      <div className="container">
        <div className="header-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo dengan Foto Profil */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHome}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                boxShadow: '0 0 15px var(--primary)'
              }}>
                <img 
                  src="/profile.png" 
                  alt="Asep Anggara" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center 15%',
                    
                    // PERBAIKAN: Hapus brightness & invert agar wajah terlihat.
                    // Gunakan drop-shadow untuk efek glow futuristik yang menyatu dengan background Midnight Blue
                    filter: 'drop-shadow(0 0 20px rgba(0, 243, 255, 0.3))' 
                  }} 
                />
              </div>
              
              <span style={{
                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                fontFamily: "'Orbitron', sans-serif"
              }}>
                ASEP ANGGARA
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ marginLeft: 'auto', marginRight: '30px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', alignItems: 'center', margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <motion.li key={item.id} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    style={{
                      color: activeLink === item.id ? 'var(--primary)' : 'var(--light)',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      position: 'relative',
                      padding: '8px 0',
                      cursor: 'pointer',
                      transition: 'color 0.3s'
                    }}
                  >
                    {item.label}
                    {activeLink === item.id && (
                      <motion.div
                        layoutId="underline"
                        style={{
                          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px',
                          background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.div
            className="mobile-toggle-btn"
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: '45px', height: '45px', borderRadius: '50%',
              background: isOpen ? 'var(--primary)' : 'rgba(0, 243, 255, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', border: '1px solid var(--primary)',
              zIndex: 1001, transition: 'all 0.3s'
            }}
          >
            {isOpen ? <FaTimes color="white" /> : <FaCode color="var(--primary)" />}
          </motion.div>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0, display: 'block' } : { opacity: 0, y: -20, transitionEnd: { display: 'none' } }}
          className="mobile-menu glass"
          style={{
            position: 'absolute', top: '90px', right: '20px', minWidth: '200px',
            borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden', padding: '10px'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              style={{
                display: 'block', padding: '12px 20px', textDecoration: 'none',
                color: activeLink === item.id ? 'var(--primary)' : 'white',
                background: activeLink === item.id ? 'rgba(0, 243, 255, 0.1)' : 'transparent',
                borderRadius: '10px', transition: '0.3s'
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;