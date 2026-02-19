
import React, { useState } from 'react';
import { motion } from 'framer-motion';



const ministries = [
  {
    title: 'Life Gate Church',
    subtitle: 'Worship • Discipleship • Community • Mission',
    image:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Life Gate Church exists to glorify God by worshipping Him, making disciples, and serving both the local community and the wider world.',
      'As the spiritual foundation of New Foundation Trust, we nurture believers to live out their faith with obedience, love, and service.',
      'Through prayer, worship, teaching, and fellowship, believers grow in spiritual maturity and Christlike character.',
    ],
    verse:
      '“They devoted themselves to the apostles’ teaching and to fellowship.” — Acts 2:42',
  },
  {
    title: 'Ratna Children’s Home',
    subtitle: 'Giving Children Hope, Dignity, and a Future',
    
    image: '/images/ratna.jpg',

    content: [
      'Ratna Children’s Home was established with a compassionate vision to care for poor and destitute children.',
      'We provide food, shelter, education, healthcare, emotional care, and spiritual guidance.',
      'Every child is treated with dignity and love as precious in God’s sight.',
    ],
    verse:
      '“Whoever is kind to the poor lends to the Lord.” — Proverbs 19:17',
  },
  {
    title: 'New Foundation Bible School',
    subtitle: 'Equipping Leaders • Strengthening the Church',
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Our Bible School equips pastors, evangelists, and church workers with sound biblical teaching.',
      'Focused especially on rural areas, we strengthen leaders through mentoring and practical training.',
      'We raise servants who handle God’s Word with integrity and humility.',
    ],
    verse:
      '“Do your best to present yourself to God as one approved.” — 2 Timothy 2:15',
  },
  {
    title: 'Outreach Ministries',
    subtitle: 'Reaching the Unreached • Serving with Love',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Our Outreach Ministry takes the love of Christ beyond church walls.',
      'We combine evangelism with compassionate service to meet real-life needs.',
      'Special focus is given to rural and underserved communities.',
    ],
    verse:
      '“How beautiful are the feet of those who bring good news!” — Romans 10:15',
  },
];

const ChurchMinistriesPage = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={styles.page}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.mainTitle}
      >
        Our Ministries
      </motion.h1>

      {/* Tabs */}
      <div style={styles.tabs}>
        {ministries.map((m, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              ...styles.tab,
              ...(active === i ? styles.activeTab : {}),
            }}
          >
            {m.title}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        {/* Image */}
        <div style={styles.imageWrap}>
          <img
            src={ministries[active].image}
            alt={ministries[active].title}
            style={styles.image}
          />
        </div>

        {/* Text */}
        <div style={styles.content}>
          <h2 style={styles.cardTitle}>{ministries[active].title}</h2>
          <h4 style={styles.subtitle}>{ministries[active].subtitle}</h4>

          {ministries[active].content.map((text, idx) => (
            <p key={idx} style={styles.text}>{text}</p>
          ))}

          <div style={styles.verseBox}>
            {ministries[active].verse}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChurchMinistriesPage;

/* 🌈 STYLES */

const styles = {
  page: {
    padding: '90px 20px',
    background: 'linear-gradient(180deg, #e0f2fe, #fefce8)',
    fontFamily: 'Poppins, Segoe UI, sans-serif',
  },

  mainTitle: {
    textAlign: 'center',
    fontSize: 'clamp(34px, 5vw, 48px)',
    color: '#0f172a',
    marginBottom: '40px',
  },

  tabs: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '14px',
    marginBottom: '40px',
  },

  tab: {
    padding: '12px 24px',
    borderRadius: '999px',
    border: '1px solid #93c5fd',
    background: '#ffffff',
    color: '#1e3a8a',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  activeTab: {
    background: 'linear-gradient(135deg, #2563eb, #60a5fa)',
    color: '#ffffff',
    border: 'none',
    fontWeight: 600,
    boxShadow: '0 10px 25px rgba(37,99,235,0.35)',
  },

  card: {
    maxWidth: '1100px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: '26px',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
  },

  imageWrap: {
    flex: '1 1 420px',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  content: {
    flex: '1 1 500px',
    padding: '42px',
  },

  cardTitle: {
    fontSize: '30px',
    color: '#1e3a8a',
    marginBottom: '6px',
  },

  subtitle: {
    color: '#b45309',
    marginBottom: '18px',
    fontWeight: 500,
  },

  text: {
    fontSize: '16px',
    lineHeight: 1.9,
    color: '#334155',
    marginBottom: '14px',
  },

  verseBox: {
    marginTop: '26px',
    padding: '18px 22px',
    background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    borderLeft: '6px solid #facc15',
    fontStyle: 'italic',
    color: '#713f12',
    borderRadius: '8px',
  },
};
