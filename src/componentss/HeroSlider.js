
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const slides = [
  //   {
  //   image: '/images/pillalu5.jpeg',
  //   heading: 'Welcome to',
  //   title: 'New Foundation Trust',
  //   subtitle: 'Serving God • Serving People • Transforming Lives',
  // },
  //   {
  //   image: '/images/pillalu4.jpeg',
  //   heading: 'Welcome to',
  //   title: 'New Foundation Trust',
  //   subtitle: 'Serving God • Serving People • Transforming Lives',
  // },
   {
    image: '/images/pillalu3.jpeg',
    heading: 'Welcome to',
    title: 'New Foundation Trust',
    subtitle: 'Serving God • Serving People • Transforming Lives',
  },
  {
    image: '/images/pillalu.jpg',
    heading: 'Welcome to',
    title: 'New Foundation Trust',
    subtitle: 'Serving God • Serving People • Transforming Lives',
  },
  {
    image: '/images/pillalu1.jpg',
    heading: 'Life Gate Church',
    title: 'A Place of Worship & Hope',
    subtitle: 'Worship • Discipleship • Community • Mission',
  },
  {
 image: '/images/pillalu2.jpg',
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
