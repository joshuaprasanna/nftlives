// EventsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaChurch, FaCalendarAlt, FaCross, FaPray } from 'react-icons/fa';

const events = [
  {
    title: 'Holy Communion',
    icon: <FaChurch />,
    date: 'Every 1st Sunday',
    description:
      'Join us in remembrance of Christ through Holy Communion, sharing in faith and fellowship.',
  },
  {
    title: 'Youth Fellowship',
    icon: <FaCalendarAlt />,
    date: 'Every Month',
    description:
      'A vibrant gathering of young hearts with worship, the Word, and fellowship.',
  },
  {
    title: 'Fasting Prayers',
    icon: <FaPray />,
    date: 'Every Saturday',
    description:
      'Come together for powerful fasting prayers, seeking God’s presence and guidance.',
  },
  {
    title: 'Christmas Gospel Meetings',
    icon: <FaCross />,
    date: 'Every December',
    description:
      'Special gospel meetings celebrating the birth of our Savior, Jesus Christ.',
  },
];

const EventsSection = () => {
  return (
    <section
      style={{
        padding: '120px 24px',
        background:
          'linear-gradient(180deg, #fffaf0 0%, #fef6e8 50%, #ffffff 100%)',
        textAlign: 'center',
      }}
    >
      {/* SECTION HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#8b5a00',
          marginBottom: '10px',
          fontFamily: 'Georgia, serif',
        }}
      >
        Upcoming Events
      </motion.h2>

      <p
        style={{
          maxWidth: '650px',
          margin: '0 auto 70px',
          fontSize: '1.05rem',
          color: '#6b5b3e',
          lineHeight: 1.7,
        }}
      >
        Stay connected and be a part of our church life through these
        upcoming worship services and fellowship events.
      </p>

      {/* EVENTS GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{
              background:
                'linear-gradient(145deg, #ffffff, #fdf5e6)',
              borderRadius: '22px',
              padding: '32px 26px 36px',
              boxShadow:
                '0 22px 45px rgba(140,100,30,0.18)',
            }}
          >
            {/* ICON */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                margin: '0 auto 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  'linear-gradient(135deg, #d4a017, #f5d76e)',
                color: '#ffffff',
                fontSize: '28px',
                boxShadow:
                  '0 10px 25px rgba(180,130,30,0.4)',
              }}
            >
              {event.icon}
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize: '1.35rem',
                color: '#4a2c00',
                marginBottom: '6px',
                fontWeight: 600,
              }}
            >
              {event.title}
            </h3>

            {/* DATE */}
            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#a67c00',
                marginBottom: '14px',
              }}
            >
              {event.date}
            </p>

            {/* DESCRIPTION */}
            <p
              style={{
                fontSize: '0.95rem',
                color: '#5f4b32',
                lineHeight: 1.7,
              }}
            >
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
