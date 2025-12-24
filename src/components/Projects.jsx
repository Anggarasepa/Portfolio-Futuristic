import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiAndroid, SiGumroad } from 'react-icons/si';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Data proyek dengan link GitHub yang bisa diisi
  const projects = [
    {
      id: 1,
      title: "Artificial Intelligent",
      description: "Real-time analytics Market dengan visualisasi 3D dan AI predictions",
      tags: ["Python", "Machine Learning", "AI"],
      icon: <FaPython />,
      gradient: "linear-gradient(135deg, #00f3ff, #7b00ff)",
      link: "https://anggarasepa.gumroad.com/l/autogenv16futuresbinance", // GANTI: gumroad -> link
      linkType: "gumroad" // TANDAI INI SEBAGAI GUMROAD
    },
    {
      id: 2,
      title: "Mobile Application",
      description: "Android application dengan Interactive visualization",
      tags: ["Kotlin", "Firebase", "Android"],
      icon: <SiKotlin />,
      gradient: "linear-gradient(135deg, #ff00c8, #ff5500)",
      link: "https://github.com/Anggarasepa/PoinNusamba.git", // GANTI: github -> link
      linkType: "github" // TANDAI INI SEBAGAI GITHUB
    },
    {
      id: 3,
      title: "Web Development",
      description: "Explorer untuk keindahan pengalaman interaksi pengguna",
      tags: ["Node.Js", "React", "CSS", "Html"],
      icon: <FaReact />,
      gradient: "linear-gradient(135deg, #00ff88, #0088ff)",
      link: "https://github.com/Anggarasepa/Portfolio-Futuristic.git", // GANTI: github -> link
      linkType: "github" // TANDAI INI SEBAGAI GITHUB
    }
  ];

  const techStack = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiKotlin />, name: "Kotlin", color: "#7F52FF" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiAndroid />, name: "Android", color: "#3DDC84" }
  ];

  // ========== FUNGSI BARU ==========

  // 1. Fungsi untuk tombol "View All Projects" - scroll ke projects grid
  const scrollToProjectsGrid = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      const headerHeight = 80;
      const elementPosition = projectsGrid.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 2. Fungsi untuk tombol "Get in Touch" - scroll ke contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 3. Fungsi untuk membuka link berdasarkan type
  const openLink = (project, e) => {
    e.preventDefault();
    
    if (!project.link || project.link === '#') {
      alert(`${project.linkType === "gumroad" ? "Gumroad" : "GitHub"} link belum diatur.`);
      return;
    }
    
    if (project.linkType === "gumroad") {
      // Untuk Gumroad, buka di tab baru
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      // Untuk GitHub, buka di tab baru
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="projects-section" style={{ padding: '100px 0' }}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            <span style={{ color: 'var(--primary)' }}>PRO</span>JECTS
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto',
            fontFamily: "'Orbitron', 'Arial', sans-serif",
            letterSpacing: '1px',
            fontWeight: '500'
          }}>
            Karya inovatif yang menggabungkan teknologi terkini dengan desain futuristik
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '20px',
                  minWidth: '100px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ fontSize: '2.5rem', color: tech.color }}>
                  {tech.icon}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '70px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          <button 
            onClick={scrollToProjectsGrid}
            className="btn btn-primary" 
            style={{ 
              padding: '15px 50px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            View All Projects
            <FaExternalLinkAlt style={{ fontSize: '0.9rem' }} />
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div 
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="project-card glass"
              style={{
                padding: '30px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Background Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: project.gradient,
                opacity: hoveredProject === project.id ? 0.1 : 0.05,
                transition: 'opacity 0.3s',
                zIndex: -1
              }} />

              {/* Project Icon */}
              <motion.div
                animate={{ rotate: hoveredProject === project.id ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  color: 'var(--primary)'
                }}
              >
                {project.icon}
              </motion.div>

              {/* Project Content */}
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '30px'
                }}>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        padding: '5px 15px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links - KONDISIONAL BERDASARKAN LINK TYPE */}
              <motion.div
                animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                style={{
                  display: 'flex',
                  gap: '15px',
                  justifyContent: 'space-between'
                }}
              >
                {/* Button berdasarkan link type */}
                <button
                  onClick={(e) => openLink(project, e)}
                  className="btn"
                  style={{
                    padding: '10px 20px',
                    background: project.linkType === "gumroad" 
                      ? 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.4))' // Orange untuk Gumroad
                      : 'rgba(255, 255, 255, 0.1)', // Default untuk GitHub
                    border: project.linkType === "gumroad" 
                      ? '1px solid rgba(255, 107, 53, 0.5)' 
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    flex: 1,
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  {project.linkType === "gumroad" ? (
                    <>
                      <SiGumroad style={{ fontSize: '1.2rem', color: '#FF6B35' }} />
                      <span>Gumroad</span>
                    </>
                  ) : (
                    <>
                      <FaGithub />
                      <span>GitHub</span>
                    </>
                  )}
                </button>
                
                {/* Get in Touch Button (SAMA UNTUK SEMUA) */}
                <button
                  onClick={scrollToContact}
                  className="btn btn-primary"
                  style={{
                    padding: '10px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    flex: 1,
                    justifyContent: 'center',
                    border: 'none'
                  }}
                >
                  <span>Get in Touch</span>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;