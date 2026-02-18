import React from 'react';
import { motion } from 'framer-motion';

const MissionStatement = () => {
  return (
    <section className="mission-section">
      <motion.div
        className="mission-highlight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="mission-label">Our Mission</span>

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

      {/* STYLES */}
      <style>{`
        .mission-section {
          padding: 120px 20px;
          background: #ffffff;
          font-family: 'Inter', 'Poppins', sans-serif;
        }

        /* 🔥 HIGHLIGHT BACKGROUND */
        .mission-highlight {
          max-width: 950px;
          margin: 0 auto;
          padding: 70px 60px;
          background: linear-gradient(
            135deg,
            #ecfdf5 0%,
            #f0fdfa 50%,
            #ffffff 100%
          );
          border-radius: 28px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.08);
          border-left: 6px solid #059669;
        }

        .mission-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #047857;
          font-weight: 600;
        }

        .mission-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 700;
          margin: 18px 0 26px;
          color: #064e3b;
        }

        .divider {
          width: 90px;
          height: 3px;
          background: #f59e0b;
          margin-bottom: 40px;
        }

        .mission-text {
          font-size: 17px;
          line-height: 1.9;
          color: #065f46;
        }

        .mission-text p {
          margin-bottom: 22px;
        }

        .mission-text strong {
          color: #92400e;
        }

        @media (max-width: 768px) {
          .mission-highlight {
            padding: 45px 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionStatement;
