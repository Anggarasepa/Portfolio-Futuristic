import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { SiDiscord, SiTiktok } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormError(''); // Clear error ketika user mengetik
  };

  // ========== FUNGSI UNTUK MENGIRIM EMAIL ==========
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError('Please fill in all fields');
      return;
    }
    
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    try {
      // === OPSI 1: Menggunakan EmailJS (RECOMMENDED) ===
      // Jika Anda menggunakan EmailJS, aktifkan kode di bawah
      // await sendEmailWithEmailJS(formData);
      
      // === OPSI 2: Menggunakan mailto link (Simple) ===
      sendEmailWithMailTo(formData);
      
      // Simulasi delay untuk UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      setIsSent(true);
      
      // Reset form setelah 5 detik
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  // ========== OPSI 1: EMAILJS (Setup Required) ==========
  /*
  const sendEmailWithEmailJS = async (data) => {
    // Install: npm install emailjs-com
    // Daftar di: https://www.emailjs.com/
    
    const emailjs = await import('emailjs-com');
    
    const serviceID = 'YOUR_SERVICE_ID'; // Dapatkan dari EmailJS
    const templateID = 'YOUR_TEMPLATE_ID'; // Dapatkan dari EmailJS
    const userID = 'YOUR_USER_ID'; // Dapatkan dari EmailJS
    
    return emailjs.send(serviceID, templateID, {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'asepanggara@gmail.com' // Email Anda
    }, userID);
  };
  */

  // ========== OPSI 2: MAILTO LINK (Simple - No Backend) ==========
  const sendEmailWithMailTo = (data) => {
    const recipient = 'asepanggara@gmail.com'; // GANTI DENGAN EMAIL ANDA
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Buka default email client
    window.location.href = mailtoLink;
  };

  // ========== DATA CONTACT & SOCIAL ==========
  // GANTI DENGAN INFORMASI ANDA
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "asepanggara@gmail.com", // GANTI EMAIL ANDA
      color: "#00f3ff",
      link: "mailto:asepanggara@gmail.com" // Link untuk email
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+62 857 8118 9228", // GANTI NOMOR ANDA
      color: "#7b00ff",
      link: "https://wa.me/6285781189228" // Link WhatsApp
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Bandung, Indonesia", // GANTI LOKASI ANDA
      color: "#ff00c8"
    },
    {
      icon: <SiDiscord />,
      title: "Discord",
      info: "@asgardisme", // GANTI USERNAME DISCORD
      color: "#5865F2"
    }
  ];

  // ========== SOCIAL MEDIA LINKS ==========
  // GANTI "#" DENGAN LINK MEDIA SOSIAL ANDA
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      link: "https://github.com/Anggarasepa", // GANTI
      label: "GitHub",
      color: "#333"
    },
    { 
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/asep-anggara-ab5610112/", // GANTI
      label: "LinkedIn",
      color: "#0077B5"
    },
    { 
      icon: <FaInstagram />, 
      link: "https://www.instagram.com/anggarasepa/", // GANTI
      label: "Instagram",
      color: "#E4405F"
    },
    { 
      icon: <FaTwitter />, 
      link: "https://x.com/anggarasepa", // GANTI
      label: "Twitter",
      color: "#1DA1F2"
    },
    // Tambahkan media sosial lain jika perlu
    { 
      icon: <FaYoutube />, 
      link: "https://www.youtube.com/@anggarasepa", // OPSIONAL
      label: "YouTube",
      color: "#FF0000"
    },
    { 
      icon: <SiTiktok />, 
      link: "https://www.tiktok.com/@anggarasepa", // OPSIONAL
      label: "TikTok",
      color: "#000000"
    }
  ];

  return (
    <section id="contact" className="contact-section" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            GET IN <span style={{ color: 'var(--primary)' }}>TOUCH</span>
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto',
            fontFamily: "'Orbitron', 'Arial', sans-serif", // Font sama
            letterSpacing: '1px'
          }}>
            Mari berkolaborasi menciptakan sesuatu yang luar biasa
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px'
        }}>
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--light)' }}>
                Contact <span style={{ color: 'var(--primary)' }}>Info</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: item.link ? 'pointer' : 'default'
                    }}
                    onClick={() => {
                      if (item.link) {
                        if (item.title === 'Email') {
                          window.location.href = item.link;
                        } else {
                          window.open(item.link, '_blank', 'noopener,noreferrer');
                        }
                      }
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: item.color
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '5px'
                      }}>
                        {item.title}
                      </div>
                      <div style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: '500',
                        color: item.link ? 'var(--primary)' : 'white'
                      }}>
                        {item.info}
                        {item.link && (
                          <span style={{ 
                            marginLeft: '10px', 
                            fontSize: '0.8rem',
                            opacity: 0.7
                          }}>
                            (click to contact)
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links - DIUPDATE DENGAN LINK */}
            <div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--light)' }}>
                Connect With Me
              </h4>
              <div style={{ 
                display: 'flex', 
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '55px',
                      height: '55px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${social.color}20, ${social.color}40)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                      color: social.color,
                      textDecoration: 'none',
                      border: `1px solid ${social.color}40`,
                      transition: 'all 0.3s',
                      position: 'relative'
                    }}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                    {/* Tooltip hover */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-35px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '0.7rem',
                      whiteSpace: 'nowrap',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      pointerEvents: 'none'
                    }}>
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Tambah lebih banyak sosial media jika perlu */}
              <div style={{ marginTop: '25px' }}>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '10px'
                }}>
                  Follow me on social media for updates
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '40px', borderRadius: '20px' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--light)' }}>
              Send <span style={{ color: 'var(--primary)' }}>Message</span>
            </h3>

            {/* Error Message */}
            {formError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                style={{
                  marginBottom: '20px',
                  padding: '15px',
                  background: 'linear-gradient(90deg, #ff000020, #ff000040)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}
              >
                <span style={{ color: '#ff4444' }}>
                  ⚠️ {formError}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gap: '25px' }}>
                {/* Name & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="input-field"
                      style={{ width: '100%' }}
                    />
                    <label className="input-label">Your Name *</label>
                  </div>
                  
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="input-field"
                      style={{ width: '100%' }}
                    />
                    <label className="input-label">Email Address *</label>
                  </div>
                </div>

                {/* Subject */}
                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="input-field"
                  />
                  <label className="input-label">Subject *</label>
                </div>

                {/* Message */}
                <div className="input-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows="5"
                    className="input-field"
                    style={{ resize: 'vertical' }}
                  />
                  <label className="input-label">Your Message *</label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                  style={{
                    padding: '18px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginTop: '10px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: isSubmitting ? 'wait' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid transparent',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 0.8s linear infinite'
                        }}></div>
                        Sending...
                      </span>
                    </>
                  ) : isSent ? (
                    <>
                      <FaPaperPlane style={{ marginRight: '10px' }} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: '10px' }} />
                      Send Message
                    </>
                  )}

                  {/* Success Animation */}
                  {isSent && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 20 }}
                      transition={{ duration: 1 }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '10px',
                        height: '10px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  )}
                </motion.button>

                {/* Form Note */}
                <p style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textAlign: 'center',
                  marginTop: '10px'
                }}>
                  * Required fields. Message will open your email client.
                </p>
              </div>
            </form>

            {/* Form Status Success */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={isSent ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
              style={{
                marginTop: '20px',
                padding: '15px',
                background: 'linear-gradient(90deg, #00ff8820, #00ff8840)',
                borderRadius: '10px',
                textAlign: 'center',
                overflow: 'hidden'
              }}
            >
              <span style={{ color: '#00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <div>
                  <div>Message sent successfully!</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Check your email client to complete sending</div>
                </div>
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Asep Anggara. All rights reserved.
            <br />
            <span style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '1px' }}>
              Crafted with <span style={{ color: '#ff00c8' }}>❤</span> and cutting-edge technology
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;