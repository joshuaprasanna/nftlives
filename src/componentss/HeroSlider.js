
// src/componentss/HeroSlider.js

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const slides = [
  {
    image: "/images/pillalu3.jpeg",
    smallTitle: "WELCOME TO",
    title: "New Foundation Trust",
    description:
      "Serving God • Serving People • Transforming Lives",
    color: "#6366f1",
  },
  {
    image: "/images/pillalu.jpg",
    smallTitle: "TOGETHER IN FAITH",
    title: "Hope Begins Here",
    description:
      "Growing together in faith, love and fellowship.",
    color: "#072d3f",
  },
  {
    image: "/images/pillalu1.jpg",
    smallTitle: "LIFE GATE CHURCH",
    title: "A Place of Worship & Hope",
    description:
      "Worship • Discipleship • Community • Mission",
    color: "#63163c",
  },
  {
    image: "/images/pillalu2.jpg",
    smallTitle: "RATNA CHILDREN'S HOME",
    title: "Giving Children a Future",
    description:
      "Love • Care • Education • Faith",
    color: "#10b981",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useNavigate();

  const slide = slides[current];

  /* ================================
          AUTOMATIC SLIDER
  ================================= */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ================================
              NEXT
  ================================= */

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  /* ================================
             PREVIOUS
  ================================= */

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      style={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ==================================
                BACKGROUND IMAGE
      ================================== */}

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          style={{
            ...styles.background,
            backgroundImage:
              `url(${slide.image})`,
          }}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

      </AnimatePresence>


      {/* ==================================
              LIGHT OVERLAY
      ================================== */}

      <div
        // style={{
        //   ...styles.overlay,
        //   background: `
        //     linear-gradient(
        //       90deg,
        //       rgba(255,255,255,0.97) 0%,
        //       rgba(255,255,255,0.88) 32%,
        //       rgba(255,255,255,0.48) 57%,
        //       rgba(255,255,255,0.08) 100%
        //     )
        //   `,
        // }}
      />


      {/* ==================================
              SOFT COLOR GLOW
      ================================== */}

      <motion.div
        key={`glow-${current}`}
        style={{
          ...styles.colorGlow,
          background: slide.color,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.12,
        }}
        transition={{
          duration: 1.2,
        }}
      />


      {/* ==================================
                  CONTENT
      ================================== */}

      <div style={styles.container}>

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            style={styles.content}
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 25,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* SMALL TITLE */}

            <motion.div
              style={{
                ...styles.smallTitle,
                color: slide.color,
              }}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
            >
              {slide.smallTitle}
            </motion.div>


            {/* TITLE */}

            <motion.h1
              style={styles.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              {slide.title}
            </motion.h1>


            {/* COLOR LINE */}

            <motion.div
              style={{
                ...styles.line,
                background: slide.color,
              }}
              initial={{
                width: 0,
              }}
              animate={{
                width: 75,
              }}
              transition={{
                delay: 0.45,
                duration: 0.5,
              }}
            />


            {/* DESCRIPTION */}

            <motion.p
              style={styles.description}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
              }}
            >
              {slide.description}
            </motion.p>


            {/* BUTTON */}

            <motion.div
              style={styles.buttons}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
            >

              <button
                onClick={() =>
                  navigate("/get-involved")
                }
                style={{
                  ...styles.primaryButton,
                  background: slide.color,
                }}
              >
                Get Involved
                <FaArrowRight />
              </button>


              <button
                onClick={() =>
                  navigate("/contact")
                }
                style={styles.secondaryButton}
              >
                Contact Us
              </button>

            </motion.div>

          </motion.div>

        </AnimatePresence>


        {/* ==================================
                  SLIDE NUMBER
        ================================== */}

        <div style={styles.slideNumber}>

          <span
            style={{
              color: slide.color,
            }}
          >
            0{current + 1}
          </span>

          <span style={styles.numberLine} />

          <span style={styles.total}>
            0{slides.length}
          </span>

        </div>

      </div>


      {/* ==================================
                    ARROWS
      ================================== */}

      <div style={styles.arrows}>

        <button
          onClick={previousSlide}
          style={styles.arrow}
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          style={styles.arrow}
        >
          <FaChevronRight />
        </button>

      </div>


      {/* ==================================
                     DOTS
      ================================== */}

      <div style={styles.dots}>

        {slides.map((item, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              ...styles.dot,
              width:
                index === current
                  ? "34px"
                  : "8px",
              background:
                index === current
                  ? item.color
                  : "#d1d5db",
            }}
          />

        ))}

      </div>


      {/* ==================================
               BOTTOM COLOR BAR
      ================================== */}

      <div style={styles.bottomBar}>

        {slides.map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              background: item.color,
              opacity:
                index === current
                  ? 1
                  : 0.35,
            }}
          />
        ))}

      </div>

    </section>
  );
};

export default HeroSlider;


/* ==================================================
                       STYLES
================================================== */

const styles = {

  hero: {
    position: "relative",
    width: "100%",
    height: "90vh",
    minHeight: "600px",
    overflow: "hidden",
    background: "#f8fafc",
    fontFamily:
      "Poppins, Segoe UI, sans-serif",
  },


  /* BACKGROUND */

  background: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0,
  },


  /* LIGHT OVERLAY */

  overlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },


  /* SOFT COLOR */

  colorGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    filter: "blur(100px)",
    right: "-150px",
    top: "-100px",
    zIndex: 2,
  },


  /* CONTAINER */

  container: {
    position: "relative",
    zIndex: 5,
    width: "100%",
    maxWidth: "1400px",
    height: "100%",
    margin: "0 auto",
    padding: "0 9%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  },


  /* CONTENT */

  content: {
    width: "620px",
    maxWidth: "90%",
  },


  /* SMALL TITLE */

  smallTitle: {
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "3px",
    marginBottom: "14px",
  },


  /* MAIN TITLE */

 title: {
  margin: 0,
  color: "#1409af",
  fontSize: "clamp(42px, 5.5vw, 72px)",
  fontWeight: 800,
  lineHeight: 1.08,
  letterSpacing: "-2px",

  // Soft professional shading
  textShadow: `
    1px 1px 0 rgba(255,255,255,0.7),
    0 4px 12px rgba(112,2,2,0.18)
  `,
},


  /* LINE */

  line: {
    height: "4px",
    borderRadius: "20px",
    margin:
      "20px 0 18px",
  },


  /* DESCRIPTION */

  description: {
    margin: 0,
    maxWidth: "560px",
    color: "#475569",
    fontSize:
      "clamp(16px, 1.8vw, 20px)",
    lineHeight: 1.7,
  },


  /* BUTTONS */

  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "30px",
    flexWrap: "wrap",
  },


  primaryButton: {
    border: "none",
    color: "#ffffff",
    padding:
      "14px 22px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    boxShadow:
      "0 8px 20px rgba(0,0,0,0.12)",
    transition:
      "transform 0.25s ease",
  },


  secondaryButton: {
    background:
      "rgba(255,255,255,0.75)",
    border:
      "1px solid #cbd5e1",
    color: "#334155",
    padding:
      "13px 23px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
  },


  /* SLIDE NUMBER */

  slideNumber: {
    position: "absolute",
    right: "9%",
    bottom: "85px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "25px",
    fontWeight: 800,
  },


  numberLine: {
    width: "45px",
    height: "1px",
    background: "#94a3b8",
  },


  total: {
    fontSize: "12px",
    color: "#64748b",
  },


  /* ARROWS */

  arrows: {
    position: "absolute",
    right: "9%",
    bottom: "35px",
    display: "flex",
    gap: "8px",
    zIndex: 10,
  },


  arrow: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border:
      "1px solid #cbd5e1",
    background:
      "rgba(255,255,255,0.8)",
    color: "#334155",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },


  /* DOTS */

  dots: {
    position: "absolute",
    left: "9%",
    bottom: "38px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },


  dot: {
    height: "8px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    padding: 0,
    transition:
      "all 0.35s ease",
  },


  /* BOTTOM BAR */

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "4px",
    display: "flex",
    zIndex: 20,
  },

};


/* ==================================================
                     MOBILE
================================================== */

if (
  typeof document !== "undefined" &&
  !document.getElementById("hero-responsive-style")
) {
  const style =
    document.createElement("style");

  style.id =
    "hero-responsive-style";

  style.innerHTML = `

    @media (max-width: 768px) {

      section[style*="90vh"] {
        height: 78vh !important;
        min-height: 560px !important;
      }

      section[style*="90vh"] > div:nth-child(2) {
        background:
          linear-gradient(
            180deg,
            rgba(255,255,255,0.94) 0%,
            rgba(255,255,255,0.82) 55%,
            rgba(255,255,255,0.25) 100%
          ) !important;
      }

    }

  `;

  document.head.appendChild(style);
}

