import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/NFT logo.jpg';

const NewFoundationSection = () => {
  return (
    <section className="nft-section">

      {/* 🌈 LIGHT BACKGROUND */}
      <div className="bg-animation"></div>
      <div className="bg-overlay"></div>
      <div className="bg-glow one"></div>
      <div className="bg-glow two"></div>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        {/* HEADER */}
        <div className="header">
          <motion.img
            src={logo}
            alt="Logo"
            className="logo"
            whileHover={{ scale: 1.1, rotate: 6 }}
          />

          <h1 className="title">New Foundation Trust</h1>

          <p className="tagline">
            ✨ Faith · Service · Transformation ✨
          </p>
        </div>

        {/* CARD */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2 className="aboutTitle">About New Foundation Trust</h2>

          <p>
            <strong>New Foundation Trust (NFT)</strong> is a Christ-centered
            ministry dedicated to fulfilling the Great Commission of
            Jesus Christ while serving society through compassionate
            outreach and social welfare initiatives.
          </p>

          <p>
            Wherever there is spiritual, social, or practical need,
            NFT responds with love, integrity, and action—bringing
            <span className="highlight"> hope, dignity, and transformation</span>.
          </p>

          <p>
            Registered with the <strong>Government of Andhra Pradesh</strong>
            (Registration No. <strong>9/2020</strong>), the Trust functions
            with transparency and accountability.
          </p>
        </motion.div>

      </motion.div>

      {/* 🎨 STYLES */}
      <style>{`

        .nft-section {
          position: relative;
          padding: 120px 20px;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #fdfbff, #eef2ff, #ecfdf5);
        }

        /* 🌈 MOVING SOFT GRADIENT */
        .bg-animation {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            270deg,
            #a5b4fc,
            #f9a8d4,
            #86efac,
            #67e8f9,
            #fde68a
          );
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
          opacity: 0.25;
          top: -50%;
          left: -50%;
        }

        /* ✨ LIGHT GLOWS */
        .bg-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .bg-glow.one {
          background: #f9a8d4;
          top: 10%;
          left: 15%;
        }

        .bg-glow.two {
          background: #86efac;
          bottom: 10%;
          right: 15%;
        }

        .bg-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent, #ffffff 70%);
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .container {
          max-width: 900px;
          margin: auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .header {
          margin-bottom: 60px;
        }

        .logo {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          margin-bottom: 15px;
        }

        .title {
          font-size: 44px;
          font-weight: 900;
          background: linear-gradient(to right, #6366f1, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tagline {
          font-size: 16px;
          margin-top: 10px;
          color: #374151;
        }

        /* 💎 GLASS LIGHT CARD */
        .card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(16px);
          padding: 55px;
          border-radius: 26px;
          box-shadow: 0 25px 70px rgba(0,0,0,0.15);
          border: 1px solid rgba(255,255,255,0.6);
          transition: 0.4s ease;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .aboutTitle {
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 25px;
          background: linear-gradient(to right, #f59e0b, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card p {
          font-size: 17px;
          line-height: 1.9;
          color: #374151;
          margin-bottom: 18px;
        }

        .card strong {
          color: #7c3aed;
        }

        .highlight {
          color: #ec4899;
          font-weight: 600;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .title {
            font-size: 30px;
          }

          .card {
            padding: 30px;
          }
        }

      `}</style>
    </section>
  );
};

export default NewFoundationSection;