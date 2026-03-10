import React, { useState } from 'react';
import { motion } from 'framer-motion';
// 1. IMPORT IKON BARU DARI FA DAN SI
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaRobot, 
  FaApple, 
  FaGamepad, 
  FaChartLine,
  FaJava // Ikon untuk Java
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiFirebase, 
  SiAndroid, 
  SiGumroad, 
  SiSwift,
  SiDart,      // Ikon untuk Dart
  SiFlutter,   // Ikon untuk Flutter
  SiXcode,     // Ikon untuk Xcode
  SiAndroidstudio // Ikon untuk Android Studio
} from 'react-icons/si';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // 1. DATA PROYEK (Tetap sama)
  const projects = [
    {
      id: 1,
      title: "Artificial Intelligent",
      description: "Real-time analytics Market dengan visualisasi 3D dan AI predictions.",
      tags: ["Python", "Machine Learning", "AI"],
      icon: <FaPython />,
      gradient: "linear-gradient(135deg, #00f3ff, #7b00ff)",
      link: "https://anggarasepa.gumroad.com/l/autogenv16futuresbinance",
      linkType: "gumroad"
    },
    {
      id: 2,
      title: "Mobile Application",
      description: "Android application dengan Interactive visualization dan sinkronisasi Cloud.",
      tags: ["Kotlin", "Firebase", "Android"],
      icon: <SiAndroid />,
      gradient: "linear-gradient(135deg, #ff00c8, #ff5500)",
      link: "https://github.com/Anggarasepa/PoinNusamba.git",
      linkType: "github"
    },
    {
      id: 3,
      title: "Bot Trading",
      description: "Automated trading system dengan algoritma analisis teknikal presisi tinggi.",
      tags: ["Python", "API", "Fintech"],
      icon: <FaChartLine />,
      gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
      link: "#",
      linkType: "github"
    },
    {
      id: 4,
      title: "Game Development",
      description: "Pengembangan pengalaman virtual interaktif dengan mekanik game modern.",
      tags: ["Unity", "C#", "3D Render"],
      icon: <FaGamepad />,
      gradient: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
      link: "#",
      linkType: "github"
    },
    {
      id: 5,
      title: "Web Development",
      description: "Explorer untuk keindahan pengalaman interaksi pengguna yang responsif.",
      tags: ["Node.Js", "React", "CSS", "Html"],
      icon: <FaReact />,
      gradient: "linear-gradient(135deg, #00ff88, #0088ff)",
      link: "https://github.com/Anggarasepa/Portfolio-Futuristic.git",
      linkType: "github"
    },
    {
      id: 6,
      title: "Workflow Automation",
      description: "Otomatisasi tugas rutin untuk efisiensi maksimal menggunakan sistem API.",
      tags: ["N8N", "JSON", "API", "AI"],
      icon: <FaRobot />,
      gradient: "linear-gradient(135deg, #FF6B35, #FFA500)",
      link: "https://github.com/Anggarasepa/Workflow_Automation.git",
      linkType: "github"
    }
  ];

  // 2. DATA SKILLS (Ditambah Java, Dart, Flutter, Xcode, Android Studio)
  const techStack = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <FaJava />, name: "Java", color: "#007396" }, // Tambah Java
    { icon: <SiKotlin />, name: "Kotlin", color: "#7F52FF" },
    { icon: <SiSwift />, name: "Swift", color: "#F05138" },
    { icon: <SiDart />, name: "Dart", color: "#0175C2" }, // Tambah Dart
    { icon: <SiFlutter />, name: "Flutter", color: "#02569B" }, // Tambah Flutter
    { icon: <SiXcode />, name: "Xcode", color: "#157EFB" }, // Tambah Xcode
    { icon: <SiAndroidstudio />, name: "Android Studio", color: "#3DDC84" }, // Tambah Android Studio
    { icon: <FaApple />, name: "iOS", color: "#FFFFFF" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiAndroid />, name: "Android", color: "#3DDC84" }
  ];

  // ========== FUNGSI NAVIGASI & LINK ========== (Tetap sama)

  const scrollToProjectsGrid = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      const headerHeight = 80;
      const elementPosition = projectsGrid.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openLink = (project, e) => {
    e.preventDefault();
    if (!project.link || project.link === '#') {
      alert(`${project.linkType === "gumroad" ? "Gumroad" : "GitHub"} link belum diatur.`);
      return;
    }
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* =========================================
          BAGIAN 1: SKILLS & TECH STACK 
          ========================================= */}
      <section id="skills" className="skills-section" style={{ padding: '100px 0', background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' }}>
              <span style={{ color: 'var(--primary)' }}>TECH</span> SKILLS
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: '600px', 
              margin: '0 auto',
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '1px'
            }}>
              Teknologi dan bahasa pemrograman yang saya gunakan untuk membangun masa depan
            </p>
          </motion.div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '25px',
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5, background: 'rgba(255, 255, 255, 0.08)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '25px',
                  minWidth: '120px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{ fontSize: '3rem', color: tech.color }}>
                  {tech.icon}
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '0.5px' }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 2: PROJECTS & PORTFOLIO 
          ========================================= */}
      <section id="projects" className="projects-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' }}>
              <span style={{ color: 'var(--primary)' }}>PRO</span>JECTS
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: '600px', 
              margin: '0 auto',
              fontFamily: "'Orbitron', sans-serif"
            }}>
              Eksplorasi solusi digital melalui berbagai platform dan disiplin ilmu
            </p>
          </motion.div>

          {/* Button View All */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <button 
              onClick={scrollToProjectsGrid}
              className="btn btn-primary" 
              style={{ 
                padding: '18px 50px',
                fontSize: '1.2rem',
                borderRadius: '50px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 10px 20px rgba(0, 243, 255, 0.2)'
              }}
            >
              Explore Portfolio
              <FaExternalLinkAlt style={{ fontSize: '0.9rem' }} />
            </button>
          </motion.div>

          {/* Grid Projects */}
          <div 
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '35px',
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
                whileHover={{ y: -12 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="project-card glass"
                style={{
                  padding: '35px',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Glow Background */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: project.gradient,
                  opacity: hoveredProject === project.id ? 0.18 : 0.06,
                  transition: 'opacity 0.4s ease',
                  zIndex: -1
                }} />

                <motion.div
                  animate={{ 
                    rotate: hoveredProject === project.id ? 360 : 0,
                    scale: hoveredProject === project.id ? 1.2 : 1
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{ fontSize: '3.5rem', marginBottom: '25px', color: 'var(--primary)' }}
                >
                  {project.icon}
                </motion.div>

                <div>
                  <h3 style={{ fontSize: '1.9rem', marginBottom: '15px', fontWeight: '700' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', marginBottom: '25px', lineHeight: '1.7' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '35px' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ 
                        padding: '6px 16px', 
                        background: 'rgba(255, 255, 255, 0.08)', 
                        borderRadius: '30px', 
                        fontSize: '0.85rem',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interaction Buttons */}
                <motion.div
                  animate={{ 
                    y: hoveredProject === project.id ? 0 : 20, 
                    opacity: hoveredProject === project.id ? 1 : 0 
                  }}
                  style={{ display: 'flex', gap: '15px' }}
                >
                  <button
                    onClick={(e) => openLink(project, e)}
                    className="btn"
                    style={{
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      color: 'white',
                      flex: 1,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontWeight: '600'
                    }}
                  >
                    {project.linkType === "gumroad" ? <SiGumroad /> : <FaGithub />}
                    {project.linkType === "gumroad" ? "Gumroad" : "GitHub"}
                  </button>
                  
                  <button
                    onClick={scrollToContact}
                    className="btn btn-primary"
                    style={{
                      padding: '12px',
                      flex: 1,
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Contact Me
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;