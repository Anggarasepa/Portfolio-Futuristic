import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLightbulb, FaUserAstronaut } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaRocket />, label: "Innovation", value: "High-End" },
    { icon: <FaCode />, label: "Clean Code", value: "Standard" },
    { icon: <FaLightbulb />, label: "Solutions", value: "AI-Driven" },
  ];

  return (
    <section id="about" className="about-section" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' }}>
            <span style={{ color: 'var(--primary)' }}>ABOUT</span> ME
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto',
            fontFamily: "'Orbitron', sans-serif"
          }}>
            Discover more about my journey in architecting digital solutions.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Sisi Kiri: Foto Profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', position: 'relative' }}
          >
            <div style={{
              width: '280px',
              height: '280px',
              margin: '0 auto',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              overflow: 'hidden',
              border: '4px solid var(--primary)',
              boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}>
              <img 
                src="/profile.png" 
                alt="Asep Anggara" 
                style={{ width: '100%', height: '100%', objectFit: 'cover',objectPosition: 'center 15%' }}
              />
            </div>
          </motion.div>

          {/* Sisi Kanan: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '20px', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px' // Jarak antara nama dan ikon
              }}>
                
                {/* Ikon sekarang pindah ke sini */}
                <FaUserAstronaut style={{ 
                  color: 'var(--primary)', 
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 0 8px var(--primary))' // Efek glow biar makin futuristik
                }} />

                <span>I am <span style={{ color: 'var(--primary)' }}>Asep Anggara</span></span>
              
              </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '30px'
            }}>
              A <strong>Full-Stack Engineer</strong> and <strong>System Architect</strong> dedicated to architecting highly efficient and visually compelling digital ecosystems. Bringing end-to-end expertise across <strong>Mobile Development (iOS & Android)</strong>, <strong>Web Engineering</strong>, and <strong>AI & Workflow Automation</strong> to transform complex concepts into seamless production-grade applications.
            </p>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
              {stats.map((stat, i) => (
                <div key={i} className="glass" style={{
                  padding: '20px 10px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '5px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>{stat.label}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;