import React from 'react';
import founderImg from './founder.jpg';

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="color-bg"></div>

      <div className="founder-wrapper">

        {/* IMAGE SIDE */}
        <div className="image-col">
          <div className="image-shell">
            <img src={founderImg} alt="Rev. Dr. Pandu Jeevan Jyothi" />
            <div className="image-caption">
              Founder & Chairman
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="text-col">
          <span className="trust-name">New Foundation Trust</span>

          <h1 className="founder-name">
            Rev. Dr. Pandu Jeevan Jyothi
          </h1>

          <p>
            <strong>New Foundation Trust</strong> was founded under the
            God-given vision of <strong>Rev. Dr. Pandu Jeevan Jyothi</strong>,
            a devoted servant of Christ committed to ministry and compassionate service.
          </p>

          <p>
            He serves as the <strong>Founding Pastor of Life Gate Church</strong>,
            located in Krishnapuram, Vizianagaram, Andhra Pradesh, India.
          </p>

          <p>
            With more than <strong>30 years of ministry experience</strong>,
            he has ministered across India and abroad, strengthening churches
            and proclaiming the Gospel of Jesus Christ.
          </p>

          <p>
            Through <strong>Ratna Children’s Home</strong>, the Trust extends
            care, education, and spiritual guidance to underprivileged children.
          </p>

          <p className="family-note">
            His beloved wife, <strong>Late Mrs. Ratna Kumari</strong>, entered
            eternal glory. They were blessed with two daughters and one son,
            continuing the God-given vision.
          </p>
        </div>

      </div>

      <style>{`
        .founder-section {
          position: relative;
          padding: 130px 20px;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        /* 🌈 COLORFUL BACKGROUND */
        .color-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6366f1, #ec4899, #22c55e);
          opacity: 0.08;
          top: 0;
          left: 0;
        }

        .founder-wrapper {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* IMAGE */
        .image-shell {
          padding: 16px;
          border-radius: 24px;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
          transition: 0.4s;
        }

        .image-shell:hover {
          transform: translateY(-12px) rotate(-1deg) scale(1.03);
        }

        .image-shell img {
          width: 100%;
          border-radius: 18px;
          border: 4px solid white;
        }

        .image-caption {
          margin-top: 12px;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          color: white;
          background: linear-gradient(90deg, #22c55e, #06b6d4);
          padding: 8px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        /* TEXT */
        .trust-name {
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: linear-gradient(90deg, #6366f1, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .founder-name {
          font-size: 44px;
          font-family: 'Georgia', serif;
          margin: 15px 0 20px;
          background: linear-gradient(90deg, #1e3a8a, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-col p {
          font-size: 16px;
          line-height: 1.9;
          margin-bottom: 18px;
          color: #374151;
        }

        .text-col strong {
          color: #ec4899;
        }

        .family-note {
          margin-top: 25px;
          padding: 15px;
          border-left: 4px solid #6366f1;
          background: #f9fafb;
          border-radius: 10px;
          font-style: italic;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .founder-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .founder-name {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Founder;