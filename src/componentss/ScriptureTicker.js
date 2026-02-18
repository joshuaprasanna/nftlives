// ScriptureTicker.js
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBible } from 'react-icons/fa';

const verses = [
  'John 3:16 – For God so loved the world that He gave His only begotten Son',
  'Psalm 23:1 – The Lord is my Shepherd; I shall not want',
  'Isaiah 41:10 – Fear not, for I am with you; be not dismayed',
  'Romans 8:28 – All things work together for good to those who love God',
  'Philippians 4:13 – I can do all things through Christ who strengthens me',
];

const ScriptureTicker = () => {
  return (
    <div style={styles.wrapper}>
      {/* Left Icon */}
      <div style={styles.iconBox}>
        <FaBible style={styles.icon} />
      </div>

      {/* Marquee */}
      <Marquee gradient={false} speed={50} pauseOnHover style={styles.marquee}>
        {verses.map((verse, index) => (
          <span key={index} style={styles.verse}>
            📖 {verse}
          </span>
        ))}
      </Marquee>

      {/* Right Icon */}
      <div style={styles.iconBox}>
        <FaBible style={styles.icon} />
      </div>
    </div>
  );
};

export default ScriptureTicker;

/* ================= STYLES ================= */
const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #0f172a, #021e47ff, #3657a5ff)',
    borderTop: '3px solid #facc15',
    borderBottom: '3px solid #facc15',
    boxShadow: '0 4px 25px rgba(0,0,0,0.5)',
    overflow: 'hidden',
  },
  iconBox: {
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#facc15',
    fontSize: '28px',
    filter: 'drop-shadow(0 0 10px rgba(250,204,21,0.9))',
  },
  marquee: {
    flex: 1,
    padding: '14px 0',
  },
  verse: {
    marginRight: '80px',
    fontSize: 'clamp(14px, 2.5vw, 18px)',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    background: 'linear-gradient(90deg, #facc15, #ffffff, #facc15)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'shimmer 3s linear infinite',
    textShadow: '0 0 6px rgba(255,255,255,0.3)',
  },
};

/* ================= GLOBAL ANIMATION ================= */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
span {
  background-size: 200% auto;
}
`, styleSheet.cssRules.length);
