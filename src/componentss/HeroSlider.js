// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import logo from '../assets/NFT logo.jpg'; // 🧠 Make sure your logo is placed in src/assets/

// const slides = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1682786307910-cfe1521ddda4?w=1920&auto=format&fit=cover&q=90',
//   },
//   {
//     image:
//       'https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?w=1920&auto=format&fit=cover&q=90',
//   },
  
// ];

// const HeroSliderWithTag = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 6000);
//     return () => clearTimeout(timer);
//   }, [index]);

//   const styles = {
//     container: {
//       width: '100%',
//       fontFamily: `'Poppins', sans-serif`,
//       overflow: 'hidden',
//     },
//     titleSection: {
//       width: '100%',
//       padding: '2rem 1rem 1rem',
//       background: 'linear-gradient(90deg,rgb(124, 194, 221), #004e92)',
//       color: '#fff',
//       boxShadow: '0 4px 12px rgba(228, 216, 216, 0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       gap: '1.5rem',
//       textAlign: 'center',
//     },
//     logo: {
//       width: '80px',
//       height: '70px',
//       objectFit: 'contain',
      
//       filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #00bcd4)',
//       animation: 'glowLogo 2s ease-in-out infinite alternate',
//       marginRight:"80px"
//     },
//     mainTitle: {
//       fontSize: '2.8rem',
//       fontWeight: '800',
//       letterSpacing: '2px',
//       textShadow: '0 0 12px rgba(255,255,255,0.8)',
//       animation: 'pulse 2s infinite',
//     },
//     subTag: {
//       fontSize: '1.4rem',
//       fontWeight: '600',
//       color: '#fdd835',
//       textShadow: '0 0 8px #fdd835, 0 0 20px #fff',
//       letterSpacing: '1px',
//       fontStyle: 'italic',
//       animation: 'glowTag 4s ease-in-out infinite',
//       marginTop: '0.3rem',
//     },
//     slider: {
//       position: 'relative',
//       height: '100vh',
//       overflow: 'hidden',
//     },
//     slide: {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       top: 0,
//       left: 0,
//       transition: 'opacity 1s ease-in-out',
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       filter: 'brightness(0.55)',
//       transform: 'scale(1.02)',
//     },
//     gradientOverlay: {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
//       zIndex: 1,
//     },

//     // Animations
//     keyframes: `
//       @keyframes pulse {
//         0% { transform: scale(1); }
//         50% { transform: scale(1.03); }
//         100% { transform: scale(1); }
//       }
//       @keyframes glowTag {
//         0%, 100% { text-shadow: 0 0 8px #fdd835, 0 0 20px #fff; }
//         50% { text-shadow: 0 0 15px #ffeb3b, 0 0 30px #fff; }
//       }
//       @keyframes glowLogo {
//         from {
//           filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #00e5ff);
//         }
//         to {
//           filter: drop-shadow(0 0 15px #00bcd4) drop-shadow(0 0 30px #fff);
//         }
//       }
//     `,
//   };

//   return (
//     <div style={styles.container}>
//       {/* Add keyframes directly in a style tag */}
//       <style>{styles.keyframes}</style>

//       {/* Title Section with Logo */}
//       <div style={styles.titleSection}>
//         <img src={logo} alt="Logo" style={styles.logo} />
//         <div>
//           <h1 style={styles.mainTitle}>New Foundation Trust</h1>
//           <div style={styles.subTag}>Building Better Lives</div>
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div style={styles.slider}>
//         {slides.map((slide, i) => (
//           <motion.div
//             key={i}
//             style={{
//               ...styles.slide,
//               opacity: i === index ? 1 : 0,
//               zIndex: i === index ? 2 : 0,
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: i === index ? 1 : 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={slide.image} alt={`slide-${i}`} style={styles.image} />
//             <div style={styles.gradientOverlay} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSliderWithTag;
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1600150806237-a7dffed6b53c?auto=format&fit=crop&w=1920&q=90',
    heading: 'Welcome to',
    title: 'New Foundation Trust',
    subtitle: 'Serving God • Serving People • Transforming Lives',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=90',
    heading: 'Life Gate Church',
    title: 'A Place of Worship & Hope',
    subtitle: 'Worship • Discipleship • Community • Mission',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=90',
    heading: 'Ratna Children’s Home',
    title: 'Giving Children a Future',
    subtitle: 'Love • Care • Education • Faith',
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.wrapper}>
      <AnimatePresence>
        <motion.div
          key={index}
          style={{
            ...styles.slide,
            backgroundImage: `url(${slides[index].image})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div style={styles.overlay} />

          {/* CONTENT */}
          <div style={styles.content}>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={styles.heading}
            >
              {slides[index].heading}
            </motion.p>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={styles.title}
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={styles.subtitle}
            >
              {slides[index].subtitle}
            </motion.p>

            {/* BUTTONS */}
            <div style={styles.buttons}>
              <button
                style={styles.primaryBtn}
                onClick={() => navigate('/get-involved')}
              >
                Get Involved
              </button>

              <button
                style={styles.secondaryBtn}
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div style={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              opacity: i === index ? 1 : 0.4,
              transform: i === index ? 'scale(1.3)' : 'scale(1)',
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'Poppins, Segoe UI, sans-serif',
  },

  slide: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))',
  },

  content: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 8%',
    color: '#fff',
    maxWidth: '900px',
  },

  heading: {
    fontSize: '16px',
    letterSpacing: '2px',
    color: '#facc15',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },

  title: {
    fontSize: 'clamp(32px, 5vw, 60px)',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '14px',
  },

  subtitle: {
    fontSize: 'clamp(16px, 2.5vw, 22px)',
    color: '#e5e7eb',
    maxWidth: '600px',
  },

  buttons: {
    marginTop: '32px',
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },

  primaryBtn: {
    background: '#facc15',
    color: '#000',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '30px',
    fontWeight: 700,
    cursor: 'pointer',
  },

  secondaryBtn: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    padding: '14px 32px',
    borderRadius: '30px',
    fontWeight: 600,
    cursor: 'pointer',
  },

  dots: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 5,
  },

  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};
