import React from 'react';
import { motion } from 'framer-motion';

const MissionStatement = () => {
  return (
    <section className="mission-section">
      
      {/* 🌈 BACKGROUND GLOW */}
      <div className="bg-blur one"></div>
      <div className="bg-blur two"></div>

      <motion.div
        className="mission-highlight"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span className="mission-label">✨ Our Mission</span>

        <h2 className="mission-title">
          Serving God by Transforming Lives
        </h2>

        <div className="divider" />

        <div className="mission-text">
          <p>
            The mission of <strong>New Foundation Trust</strong> is to make Jesus
            Christ known through both <strong>Word and Deed</strong>. We are
            committed to proclaiming the Gospel, strengthening the Church, and
            equipping believers to fulfill the Great Commission.
          </p>

          <p>
            Through biblical teaching, discipleship, and leadership training,
            we seek to build a mature and faithful Church that reflects the
            character of Christ in every aspect of life.
          </p>

          <p>
            Alongside our spiritual calling, we express God’s love through
            compassionate service — caring for orphans, widows, the elderly,
            and the poor by providing dignity, support, and opportunities for
            self-reliance.
          </p>

          <p>
            In all that we do, our purpose is to glorify God by seeing lives
            transformed through the power of the Gospel lived out in action.
          </p>
        </div>
      </motion.div>

      {/* 🎨 STYLES */}
      <style>{`
        .mission-section {
          position: relative;
          padding: 120px 20px;
          background: linear-gradient(135deg, #0f172a, #1e3a8a, #065f46);
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* 🌈 BLUR BACKGROUND EFFECT */
        .bg-blur {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.6;
          z-index: 0;
        }

        .bg-blur.one {
          background: #22c55e;
          top: -80px;
          left: -80px;
        }

        .bg-blur.two {
          background: #f59e0b;
          bottom: -80px;
          right: -80px;
        }

        /* 🔥 MAIN CARD */
        .mission-highlight {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: 0 auto;
          padding: 70px 60px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
          color: #fff;
        }

        .mission-label {
          font-size: 14px;
          letter-spacing: 2px;
          color: #fbbf24;
          font-weight: 600;
        }

        .mission-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          margin: 18px 0 26px;
          background: linear-gradient(to right, #facc15, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .divider {
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #facc15, #22c55e);
          margin-bottom: 35px;
          border-radius: 2px;
        }

        .mission-text {
          font-size: 17px;
          line-height: 1.9;
          color: #e5e7eb;
        }

        .mission-text p {
          margin-bottom: 22px;
        }

        .mission-text strong {
          color: #facc15;
        }

        /* ✨ HOVER EFFECT */
        .mission-highlight:hover {
          transform: scale(1.02);
          transition: 0.4s ease;
          box-shadow: 0 40px 100px rgba(0,0,0,0.6);
        }

        @media (max-width: 768px) {
          .mission-highlight {
            padding: 40px 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionStatement;