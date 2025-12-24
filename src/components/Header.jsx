import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // === FUNGSI SMOOTH SCROLL YANG DIPERBAIKI ===
  const scrollToSection = (id) => {
    setIsOpen(false);
    
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveLink('home');
      return;
    }
    
    if (id === 'contact') {
      const section = document.getElementById('contact');
      if (section) {
        const headerHeight = 80;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        setActiveLink('contact');
      }
      return;
    }
    
    // ========== PERUBAHAN DISINI ==========
    if (id === 'projects') {
      // Projects -> Scroll ke tombol "View All Projects"
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const viewAllButton = projectsSection.querySelector('.projects-grid');
        if (viewAllButton) {
          const headerHeight = 80;
          const buttonPosition = viewAllButton.getBoundingClientRect().top;
          const offsetPosition = buttonPosition + window.pageYOffset - headerHeight - 100;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
      setActiveLink('projects');
      return;
    }
    
    if (id === 'skills') {
      // Skills -> Scroll ke section "projects" (bukan tombol)
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const headerHeight = 80;
        const sectionTop = projectsSection.offsetTop - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }
      setActiveLink('skills');
      return;
    }
    
    if (id === 'about') {
      // About -> Scroll ke tombol "Lihat Projek" di Hero
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        const lihatProjekButton = heroSection.querySelector('.btn-primary');
        if (lihatProjekButton) {
          const headerHeight = 80;
          const buttonPosition = lihatProjekButton.getBoundingClientRect().top;
          const offsetPosition = buttonPosition + window.pageYOffset - headerHeight - 50;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
      setActiveLink('about');
      return;
    }
    // ========== END PERUBAHAN ==========
  };

  const scrollToHome = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToHome}
            style={{ cursor: 'pointer' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              {/* Foto profil */}
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
                    height: '130%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <span style={{
                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.6rem',
                fontWeight: 'bold'
              }}>
                ASEP ANGGARA
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ marginLeft: 'auto', marginRight: '30px' }}>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '30px',
              alignItems: 'center',
              margin: 0,
              padding: 0
            }}>
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ listStyle: 'none' }}
                >
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
                      fontWeight: '500',
                      fontSize: '1.1rem',
                      position: 'relative',
                      padding: '10px 0',
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                    {activeLink === item.id && (
                      <motion.div
                        layoutId="underline"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '2px',
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

          {/* Icon </> sebagai Mobile Menu Toggle */}
          <motion.div
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: isOpen 
                ? 'linear-gradient(135deg, var(--primary), var(--accent))' 
                : 'rgba(0, 243, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: isOpen 
                ? '1px solid var(--primary)' 
                : '1px solid rgba(0, 243, 255, 0.3)',
              position: 'relative',
              zIndex: 1001,
              transition: 'all 0.3s',
              boxShadow: isOpen ? '0 0 20px var(--primary)' : 'none'
            }}
          >
            {isOpen ? (
              <FaTimes style={{ 
                color: 'white', 
                fontSize: '1.3rem',
                transition: 'all 0.3s'
              }} />
            ) : (
              <FaCode style={{ 
                color: 'var(--primary)', 
                fontSize: '1.5rem',
                transition: 'all 0.3s'
              }} />
            )}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={isOpen ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            display: 'block'
          } : { 
            opacity: 0, 
            y: -20, 
            scale: 0.95,
            transitionEnd: { display: 'none' }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 15px)',
            right: '0',
            background: 'rgba(10, 10, 26, 0.98)',
            borderRadius: '20px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            minWidth: '250px',
            overflow: 'hidden',
            display: 'none'
          }}
        >
          <div style={{ padding: '10px 0' }}>
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.98 }}
                style={{ margin: '5px 15px' }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  style={{
                    color: activeLink === item.id ? 'var(--primary)' : 'var(--light)',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '15px 20px',
                    borderRadius: '12px',
                    background: activeLink === item.id 
                      ? 'linear-gradient(90deg, rgba(0, 243, 255, 0.15), rgba(123, 0, 255, 0.15))' 
                      : 'transparent',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    border: activeLink === item.id 
                      ? '1px solid rgba(0, 243, 255, 0.3)' 
                      : '1px solid transparent',
                    alignItems: 'center',
                    gap: '15px'
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: activeLink === item.id 
                      ? 'var(--primary)' 
                      : 'rgba(255, 255, 255, 0.3)',
                    boxShadow: activeLink === item.id ? '0 0 10px var(--primary)' : 'none'
                  }}></div>
                  
                  <span style={{
                    fontWeight: activeLink === item.id ? '600' : '400',
                    flex: 1
                  }}>
                    {item.label}
                  </span>
                  
                  <motion.div
                    animate={activeLink === item.id ? { x: 5 } : { x: 0 }}
                    style={{ fontSize: '0.9rem', opacity: 0.7 }}
                  >
                    →
                  </motion.div>
                </a>
              </motion.div>
            ))}
            
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              margin: '15px 20px'
            }}></div>
            
            <div style={{ padding: '15px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '5px' }}>
                Navigate to section
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.3)' }}>
                Click to scroll smoothly
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;