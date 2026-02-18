import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4zu9w1u',   // 🔴 paste your SERVICE ID
        'template_0xnxt7i',  // 🔴 paste your TEMPLATE ID
        formRef.current,
        'SSZZRNGnoxi9r9sn7'    // 🔴 paste your PUBLIC KEY
      )
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        alert('Failed to send message');
        console.log(error);
      });
  };

  return (
    <div style={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.card}
      >
        <h1 style={styles.title}>Contact Us</h1>

        <p style={styles.text}>
          We would love to hear from you. Reach us anytime.
        </p>

        <div style={styles.info}>
          <p><b>📍 Address:</b> Krishnapuram,APSP Battalion,Life gate church,Vizianagaram,535005</p>
          <p><b>📞 Phone:</b> +91 9989298148</p>
          <p><b>✉️ Email:</b> newfoundationtrust@email.com</p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
          <input
            name="name"
            style={styles.input}
            placeholder="Your Name"
            required
          />

          <input
            name="email"
            type="email"
            style={styles.input}
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            style={{ ...styles.input, height: '90px' }}
            placeholder="Your Message"
            required
          />

          <button type="submit" style={styles.btn}>
            Send Message
          </button>
        </form>
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
    background: 'linear-gradient(120deg, #1d2671, #c33764)',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
  },
  card: {
    maxWidth: '700px',
    width: '100%',
    background: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
  },
  title: {
    fontSize: '32px',
    fontWeight: 800,
    marginBottom: '10px',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#475569',
    marginBottom: '20px',
  },
  info: {
    fontSize: '15px',
    color: '#1e293b',
    marginBottom: '20px',
    lineHeight: 1.7,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
  },
  btn: {
    marginTop: '10px',
    padding: '12px',
    borderRadius: '25px',
    border: 'none',
    background: '#38bdf8',
    color: '#000',
    fontWeight: 700,
    cursor: 'pointer',
  },
};
