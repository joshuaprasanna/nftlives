import React from 'react';
import { motion } from 'framer-motion';

export default function GetInvolved() {
  return (
    <div style={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.card}
      >
        <h1 style={styles.title}>Get Involved</h1>
        <p style={styles.text}>
          Join hands with <b>New Foundation Trust</b> to make a difference.
          You can support us through volunteering, donations, or community
          programs.
        </p>

        <ul style={styles.list}>
          <li>🤝 Volunteer with us</li>
          <li>💖 Donate for a cause</li>
          <li>🏫 Support education programs</li>
          <li>🍲 Help in food & relief services</li>
        </ul>

        <button style={styles.btn}>Join Now</button>
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(120deg, #0f2027, #203a43, #2c5364)',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
  },
  card: {
    maxWidth: '700px',
    background: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 800,
    marginBottom: '16px',
    color: '#0f172a',
  },
  text: {
    fontSize: '16px',
    color: '#334155',
    lineHeight: 1.7,
  },
  list: {
    marginTop: '20px',
    textAlign: 'left',
    fontSize: '16px',
    color: '#1e293b',
  },
  btn: {
    marginTop: '24px',
    padding: '12px 28px',
    borderRadius: '30px',
    border: 'none',
    background: '#facc15',
    fontWeight: 700,
    cursor: 'pointer',
  },
};
