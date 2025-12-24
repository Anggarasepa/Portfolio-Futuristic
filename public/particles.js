/**
 * PARTICLE SYSTEM FUTURISTIK
 * File ini dijalankan otomatis setelah dimuat di index.html
 */

// Tunggu sampai halaman sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Tunggu sedikit untuk memastikan React sudah render
  setTimeout(initializeParticles, 1000);
});

function initializeParticles() {
  // Cek apakah particlesJS tersedia dan container ada
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    
    // Hapus canvas yang mungkin sudah ada (untuk hot reload)
    const existingCanvas = document.querySelector('#particles-js canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }
    
    // Konfigurasi particles futuristik
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#00f3ff", "#7b00ff", "#ff00c8", "#00ff88"]
        },
        shape: {
          type: ["circle", "triangle", "edge"],
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#7b00ff",
          opacity: 0.2,
          width: 1,
          triangles: {
            enable: true,
            color: "#00f3ff",
            opacity: 0.1
          }
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: ["grab", "bubble", "repulse"]
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 150,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#0a0a1a",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
      }
    });
    
    console.log('✅ Particle system initialized successfully!');
    
    // Tambahkan event listener untuk resize
    window.addEventListener('resize', function() {
      if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
        pJSDom[0].pJS.fn.vendors.destroypJS();
        pJSDom.splice(0, 1);
        setTimeout(initializeParticles, 100);
      }
    });
    
  } else {
    console.warn('⚠️ ParticlesJS not available, using CSS fallback');
    createCSSParticlesFallback();
  }
}

// Fallback jika particlesJS tidak tersedia
function createCSSParticlesFallback() {
  const container = document.getElementById('particles-js');
  if (!container) return;
  
  container.innerHTML = '';
  container.style.background = 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)';
  
  // Buat 50 particles CSS
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'css-particle';
    
    // Random properties
    const size = Math.random() * 4 + 1;
    const color = ['#00f3ff', '#7b00ff', '#ff00c8', '#00ff88'][Math.floor(Math.random() * 4)];
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      opacity: ${Math.random() * 0.5 + 0.1};
      animation: float-particle ${duration}s linear ${delay}s infinite;
      filter: blur(${Math.random() * 2}px);
      pointer-events: none;
      z-index: -1;
    `;
    
    container.appendChild(particle);
  }
  
  // Tambahkan keyframes jika belum ada
  if (!document.querySelector('#css-particles-animation')) {
    const style = document.createElement('style');
    style.id = 'css-particles-animation';
    style.textContent = `
      @keyframes float-particle {
        0% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0.1;
        }
        25% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg);
          opacity: 0.6;
        }
        50% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
          opacity: 0.3;
        }
        75% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg);
          opacity: 0.8;
        }
        100% {
          transform: translate(0, 0) rotate(360deg);
          opacity: 0.1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  console.log('✅ CSS particles fallback created!');
}

// Export untuk penggunaan modular (jika diperlukan)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeParticles };
}