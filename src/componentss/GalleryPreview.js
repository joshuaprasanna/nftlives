// src/Church/GalleryPreview.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';

const galleryImages = [
  { src: img4, caption: 'Sunday Worship' },
  { src: img3, caption: 'Youth Fellowship' },
  { src: img2, caption: 'Powerful Sermon' },
  { src: img5, caption: 'Choir Night' },
  { src: img6, caption: 'Praise & Worship' },
  { src: img7, caption: 'Faithful Congregation' },
];

const GalleryPreview = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      style={{
        padding: '120px 24px',
        background:
          'linear-gradient(180deg, #faf7ff 0%, #f3ecff 40%, #ffffff 100%)',
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
          marginBottom: '14px',
          color: '#3b1d6b',
          fontFamily: 'Georgia, serif',
        }}
      >
        Church Gallery
      </motion.h2>

      <p
        style={{
          maxWidth: '620px',
          margin: '0 auto 60px',
          fontSize: '1.05rem',
          color: '#6b5b95',
          lineHeight: 1.7,
        }}
      >
        Moments of worship, fellowship, and God’s faithfulness captured
        through our church journey.
      </p>

      {/* GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 120 }}
            onClick={() => setSelected(img)}
            style={{
              cursor: 'pointer',
              borderRadius: '22px',
              overflow: 'hidden',
              background:
                'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.9))',
              boxShadow:
                '0 20px 45px rgba(88,45,135,0.18)',
              position: 'relative',
            }}
          >
            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.caption}
              style={{
                width: '100%',
                height: '210px',
                objectFit: 'cover',
                filter: 'brightness(0.95) saturate(1.05)',
              }}
            />

            {/* OVERLAY */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, transparent 50%, rgba(59,29,107,0.85))',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '18px',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: '0.3px',
                }}
              >
                {img.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,5,20,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 999,
              cursor: 'zoom-out',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#fff',
                padding: '14px',
                borderRadius: '18px',
                maxWidth: '900px',
                width: '100%',
                boxShadow:
                  '0 40px 80px rgba(0,0,0,0.45)',
              }}
            >
              <img
                src={selected.src}
                alt={selected.caption}
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '14px',
                }}
              />
              <div
                style={{
                  marginTop: '14px',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#3b1d6b',
                }}
              >
                {selected.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
