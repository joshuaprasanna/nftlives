import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/NFT logo.jpg';

const NewFoundationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={styles.section}
    >
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <h1 style={styles.title}>New Foundation Trust</h1>
          <p style={styles.tagline}>
            Faith · Service · Transformation
          </p>
        </div>

        {/* ABOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={styles.card}
        >
          <h2 style={styles.aboutTitle}>About New Foundation Trust</h2>

          <p style={styles.text}>
            <strong>New Foundation Trust (NFT)</strong> is a Christ-centered
            ministry dedicated to fulfilling the Great Commission of
            Jesus Christ while serving society through compassionate
            outreach and social welfare initiatives.
          </p>

          <p style={styles.text}>
            Wherever there is spiritual, social, or practical need,
            NFT responds with love, integrity, and action—bringing
            hope, dignity, and lasting transformation to individuals
            and communities.
          </p>

          <p style={styles.text}>
            Registered with the <strong>Government of Andhra Pradesh</strong>
            (Registration No. <strong>9/2020</strong>), the Trust functions
            with transparency, accountability, and a strong commitment
            to ethical service.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default NewFoundationSection;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: '110px 20px',
    background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)',
    fontFamily: 'Inter, Poppins, Segoe UI, sans-serif',
    color: '#1f2937',
  },

  container: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },

  header: {
    marginBottom: '55px',
  },

  logo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    padding: '6px',
    background: '#ffffff',
    boxShadow: '0 6px 18px rgba(109,40,217,0.35)',
    marginBottom: '14px',
  },

  title: {
    fontSize: 'clamp(32px, 4vw, 44px)',
    fontWeight: 700,
    color: '#5b21b6', // royal purple
    marginBottom: '6px',
  },

  tagline: {
    fontSize: '16px',
    color: '#6d28d9',
    opacity: 0.9,
  },

  card: {
    background: '#ffffff',
    padding: '48px',
    borderRadius: '22px',
    boxShadow: '0 25px 60px rgba(88,28,135,0.22)',
    borderTop: '6px solid #f59e0b', // gold accent
  },

  aboutTitle: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '28px',
    color: '#b45309', // gold-brown
  },

  text: {
    fontSize: '17px',
    lineHeight: 1.9,
    color: '#4c1d95',
    marginBottom: '18px',
  },
};
