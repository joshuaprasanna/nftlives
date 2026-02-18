// src/Church/SermonsHighlight.js
import React from 'react';
import { motion } from 'framer-motion';

const sermons = [
  {
    title: 'The Power of Faith',
    speaker: 'Pastor John',
    date: 'July 20, 2025',
    videoUrl: 'https://www.youtube.com/embed/xrXpWrVag0A',
  },
  {
    title: 'Walking in Grace',
    speaker: 'Pastor Grace',
    date: 'July 13, 2025',
    videoUrl: 'https://www.youtube.com/embed/6iUW8KiPL3g',
  },
  {
    title: 'Hope in Hard Times',
    speaker: 'Pastor David',
    date: 'July 6, 2025',
    videoUrl: 'https://www.youtube.com/embed/NGTQRtnDcQo',
  },
];

const SermonsHighlight = () => {
  return (
    <section
      id="sermons"
      style={{
        padding: '120px 24px',
        background:
          'linear-gradient(180deg, #f8f6ff 0%, #efe9ff 50%, #ffffff 100%)',
        textAlign: 'center',
      }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#3b1d6b',
          marginBottom: '14px',
          fontFamily: 'Georgia, serif',
        }}
      >
        Recent Sermons
      </motion.h2>

      <p
        style={{
          maxWidth: '650px',
          margin: '0 auto 70px',
          fontSize: '1.05rem',
          color: '#6b5b95',
          lineHeight: 1.7,
        }}
      >
        Be strengthened by the Word of God through powerful sermons filled
        with faith, hope, and grace.
      </p>

      {/* SERMON GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {sermons.map((sermon, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 120 }}
            style={{
              background:
                'linear-gradient(145deg, #ffffff, #f5f0ff)',
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow:
                '0 25px 50px rgba(60,30,110,0.18)',
            }}
          >
            {/* VIDEO */}
            <div
              style={{
                position: 'relative',
                paddingTop: '56.25%',
                background: '#000',
              }}
            >
              <iframe
                src={sermon.videoUrl}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>

            {/* INFO */}
            <div style={{ padding: '22px 22px 26px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  color: '#2d1457',
                  marginBottom: '10px',
                  fontWeight: 600,
                }}
              >
                {sermon.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#6a5a8c',
                  marginBottom: '4px',
                }}
              >
                {sermon.speaker}
              </p>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#9a8fb5',
                }}
              >
                {sermon.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SermonsHighlight;
