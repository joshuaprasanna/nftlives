import React from 'react';
import founderImg from './founder.jpg';

const Founder = () => {
  return (
    <section className="founder-section">
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

        {/* CONTENT SIDE */}
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

      {/* STYLES */}
      <style>{`
        .founder-section {
          padding: 120px 20px;
          background: linear-gradient(180deg, #f8fafc, #ffffff);
          font-family: 'Poppins', 'Inter', sans-serif;
          display: flex;
          justify-content: center;
        }

        .founder-wrapper {
          max-width: 1150px;
          width: 100%;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 70px;
          align-items: center;
        }

        /* IMAGE COLUMN */
        .image-col {
          display: flex;
          justify-content: center;
        }

        .image-shell {
          width: 230px;
          padding: 14px;
          background: #ffffff;
          border-radius: 22px;
          box-shadow: 
            0 30px 60px rgba(0,0,0,0.18),
            inset 0 0 0 1px rgba(0,0,0,0.04);
          position: relative;
        }

        .image-shell img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          filter: contrast(1.02) saturate(1.05);
        }

        .image-caption {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 7px 22px;
          border-radius: 22px;
          letter-spacing: 0.4px;
          box-shadow: 0 10px 30px rgba(30,58,138,0.45);
        }

        /* TEXT COLUMN */
        .text-col {
          color: #1f2937;
        }

        .trust-name {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: #1e40af;
          font-weight: 600;
        }

        .founder-name {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 40px;
          font-weight: 700;
          margin: 18px 0 28px;
          color: #0f172a;
          line-height: 1.25;
        }

        .text-col p {
          font-size: 16px;
          line-height: 1.95;
          margin-bottom: 18px;
          color: #374151;
        }

        .text-col strong {
          color: #1e40af;
          font-weight: 600;
        }

        .family-note {
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid rgba(0,0,0,0.08);
          font-style: italic;
          color: #475569;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .founder-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 55px;
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
