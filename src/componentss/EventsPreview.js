// src/Church/EventsSection.js
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
    <section className="events-section">

      {/* 🌈 BACKGROUND */}
      <div className="bg"></div>

      {/* HEADER */}
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>✨ Upcoming Events</h2>
        <p>
          Stay connected and be a part of our church life through worship,
          prayer, and fellowship gatherings.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            {/* ICON */}
            <div className="icon">{event.icon}</div>

            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p className="desc">{event.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 🎨 STYLES */}
      <style>{`

        .events-section {
          position: relative;
          padding: 120px 20px;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* 🌈 BACKGROUND */
        .bg {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: linear-gradient(
            270deg,
            #fde68a,
            #fbcfe8,
            #bbf7d0,
            #bfdbfe
          );
          background-size: 600% 600%;
          animation: moveBg 18s ease infinite;
          opacity: 0.35;
        }

        @keyframes moveBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* HEADER */
        .header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 70px;
          position: relative;
          z-index: 2;
        }

        .header h2 {
          font-size: 40px;
          font-weight: 800;
          background: linear-gradient(to right, #f59e0b, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .header p {
          color: #555;
          line-height: 1.7;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        /* CARD */
        .card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          border-radius: 22px;
          padding: 32px 24px 36px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: 0.4s ease;
        }

        .card:hover {
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
        }

        /* ICON */
        .icon {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #fff;
          background: linear-gradient(135deg, #f59e0b, #ec4899);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .card h3 {
          font-size: 18px;
          color: #1e1b4b;
          margin-bottom: 6px;
        }

        .date {
          font-size: 14px;
          font-weight: 600;
          color: #f59e0b;
          margin-bottom: 12px;
        }

        .desc {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .header h2 {
            font-size: 28px;
          }
        }

      `}</style>
    </section>
  );
};

export default EventsSection;