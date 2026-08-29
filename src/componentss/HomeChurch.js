
// src/pages/ChurchHome.js

import React, { useEffect, useState } from "react";

import HeroSlider from "../componentss/HeroSlider";
import ScriptureTicker from "../componentss/ScriptureTicker";
import AboutSection from "../componentss/AboutSection";
import SermonsHighlight from "../componentss/SermonsHighlight";
import GalleryPreview from "../componentss/GalleryPreview";
import MinistriesSection from "../componentss/MinistriesSection";
import EventsPreview from "../componentss/EventsPreview";
import MissionStatement from "../componentss/MissionStatement";
import Founder from "../componentss/FounderSection";

import {
  FaHome,
  FaInfoCircle,
  FaBullseye,
  FaHandsHelping,
  FaBible,
  FaImages,
  FaCalendarAlt,
  FaArrowUp,
} from "react-icons/fa";


/* =====================================================
                     MENU ITEMS
===================================================== */

const menuItems = [
  {
    id: "hero",
    label: "Home",
    icon: <FaHome />,
    color: "#4f46e5",
  },
  {
    id: "about",
    label: "About",
    icon: <FaInfoCircle />,
    color: "#06b6d4",
  },
  {
    id: "mission",
    label: "Mission",
    icon: <FaBullseye />,
    color: "#ec4899",
  },
  {
    id: "ministries",
    label: "Ministries",
    icon: <FaHandsHelping />,
    color: "#f97316",
  },
  {
    id: "sermons",
    label: "Sermons",
    icon: <FaBible />,
    color: "#8b5cf6",
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: <FaImages />,
    color: "#10b981",
  },
  {
    id: "events",
    label: "Events",
    icon: <FaCalendarAlt />,
    color: "#ef4444",
  },
];


/* =====================================================
                     COMPONENT
===================================================== */

const HomeChurch = () => {

  const [active, setActive] = useState("hero");
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);


  /* =====================================================
                       SCROLL
  ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      /* Back to top */

      setShowTop(scrollTop > 500);


      /* Progress */

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight > 0) {

        setProgress(
          (scrollTop / documentHeight) * 100
        );

      }


      /* Active section */

      const position =
        scrollTop + window.innerHeight * 0.35;

      let currentSection = "hero";

      menuItems.forEach((item) => {

        const section =
          document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;

        const bottom =
          top + section.offsetHeight;

        if (
          position >= top &&
          position < bottom
        ) {
          currentSection = item.id;
        }

      });

      setActive(currentSection);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =====================================================
                  SCROLL TO SECTION
  ===================================================== */

  const scrollToSection = (id) => {

    const element =
      document.getElementById(id);

    if (!element) return;


    const position =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      10;


    window.scrollTo({

      top: position,

      behavior: "smooth",

    });


    setActive(id);

  };


  /* =====================================================
                    BACK TO TOP
  ===================================================== */

  const backToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };


  /* =====================================================
                        RETURN
  ===================================================== */

  return (

    <div style={styles.page}>


      {/* ==========================================
                    COLOR PROGRESS BAR
      ========================================== */}

      <div
        style={{
          ...styles.progress,
          width: `${progress}%`,
        }}
      />


      {/* ==========================================
                    COLORFUL BRAND
      ========================================== */}

      <div
        style={styles.brand}
        onClick={() =>
          scrollToSection("hero")
        }
      >

        <div style={styles.logo}>

          <span>✝</span>

        </div>


        <div>

          <div style={styles.brandName}>
            NEW FOUNDATION
          </div>

          <div style={styles.brandSub}>
            TRUST
          </div>

        </div>

      </div>


      {/* ==========================================
                  FLOATING NAVIGATION
      ========================================== */}

      <div style={styles.navigation}>

        {/* COLORFUL TOP DOT */}

        <div style={styles.navTopDot} />


        {menuItems.map((item) => {

          const isActive =
            active === item.id;


          return (

            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              title={item.label}
              style={{
                ...styles.navItem,

                background: isActive
                  ? item.color
                  : "#ffffff",

                color: isActive
                  ? "#ffffff"
                  : item.color,

                transform: isActive
                  ? "scale(1.18)"
                  : "scale(1)",

                boxShadow: isActive
                  ? `0 8px 25px ${item.color}66`
                  : "0 5px 15px rgba(0,0,0,0.10)",
              }}
            >

              {item.icon}


              {/* TOOLTIP */}

              <span
                style={{
                  ...styles.tooltip,

                  background: item.color,

                  opacity: isActive
                    ? 1
                    : 0,

                  transform: isActive
                    ? "translateX(0)"
                    : "translateX(10px)",
                }}
              >
                {item.label}
              </span>

            </button>

          );

        })}


        <div style={styles.navBottomDot} />

      </div>


      {/* ==========================================
                       MAIN CONTENT
      ========================================== */}

      <main>


        {/* HERO */}

        <section id="hero">

          <HeroSlider />

          <ScriptureTicker />

          <Founder />

        </section>


        {/* ABOUT */}

        <section id="about">

          <AboutSection />

        </section>


        {/* MISSION */}

        <section id="mission">

          <MissionStatement />

        </section>


        {/* MINISTRIES */}

        <section id="ministries">

          <MinistriesSection />

        </section>


        {/* SERMONS */}

        <section id="sermons">

          <SermonsHighlight />

        </section>


        {/* GALLERY */}

        <section id="gallery">

          <GalleryPreview />

        </section>


        {/* EVENTS */}

        <section id="events">

          <EventsPreview />

        </section>


      </main>


      {/* ==========================================
                     BACK TO TOP
      ========================================== */}

      {showTop && (

        <button
          onClick={backToTop}
          style={styles.topButton}
          title="Back to top"
        >

          <FaArrowUp />

        </button>

      )}

    </div>

  );

};


export default HomeChurch;


/* =====================================================
                        STYLES
===================================================== */

const styles = {


  /* ==========================================
                        PAGE
  ========================================== */

  page: {

    width: "100%",

    minHeight: "100vh",

    overflowX: "hidden",

    background: "#ffffff",

    fontFamily:
      "Poppins, Segoe UI, Arial, sans-serif",

  },


  /* ==========================================
                   PROGRESS
  ========================================== */

  progress: {

    position: "fixed",

    top: 0,

    left: 0,

    height: "4px",

    background:
      "linear-gradient(90deg, #4f46e5, #06b6d4, #10b981, #facc15, #f97316, #ec4899)",

    zIndex: 99999,

    boxShadow:
      "0 0 15px rgba(79,70,229,0.6)",

  },


  /* ==========================================
                       BRAND
  ========================================== */

  brand: {

    position: "fixed",

    top: "25px",

    left: "30px",

    zIndex: 9000,

    display: "flex",

    alignItems: "center",

    gap: "11px",

    padding: "8px 18px 8px 8px",

    borderRadius: "50px",

    background:
      "rgba(255,255,255,0.92)",

    backdropFilter: "blur(15px)",

    WebkitBackdropFilter:
      "blur(15px)",

    border:
      "1px solid rgba(255,255,255,0.9)",

    boxShadow:
      "0 10px 35px rgba(0,0,0,0.12)",

    cursor: "pointer",

  },


  logo: {

    width: "45px",

    height: "45px",

    borderRadius: "50%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    background:
      "linear-gradient(135deg, #4f46e5, #ec4899)",

    color: "#ffffff",

    fontSize: "23px",

    fontWeight: 900,

    boxShadow:
      "0 8px 25px rgba(79,70,229,0.35)",

  },


  brandName: {

    fontSize: "12px",

    fontWeight: 900,

    letterSpacing: "1.5px",

    color: "#1f2937",

  },


  brandSub: {

    marginTop: "3px",

    fontSize: "9px",

    fontWeight: 800,

    letterSpacing: "3px",

    color: "#ec4899",

  },


  /* ==========================================
                  SIDE NAVIGATION
  ========================================== */

  navigation: {

    position: "fixed",

    right: "25px",

    top: "50%",

    transform:
      "translateY(-50%)",

    zIndex: 9000,

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    gap: "14px",

    padding: "15px 9px",

    borderRadius: "35px",

    background:
      "rgba(255,255,255,0.75)",

    backdropFilter: "blur(18px)",

    WebkitBackdropFilter:
      "blur(18px)",

    border:
      "1px solid rgba(255,255,255,0.9)",

    boxShadow:
      "0 20px 60px rgba(0,0,0,0.15)",

  },


  navTopDot: {

    width: "7px",

    height: "7px",

    borderRadius: "50%",

    background:
      "linear-gradient(135deg, #4f46e5, #ec4899)",

    boxShadow:
      "0 0 10px rgba(236,72,153,0.7)",

  },


  navBottomDot: {

    width: "7px",

    height: "7px",

    borderRadius: "50%",

    background:
      "linear-gradient(135deg, #10b981, #06b6d4)",

    boxShadow:
      "0 0 10px rgba(6,182,212,0.7)",

  },


  navItem: {

    position: "relative",

    width: "42px",

    height: "42px",

    border: "none",

    borderRadius: "50%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    fontSize: "15px",

    cursor: "pointer",

    transition:
      "all 0.3s ease",

  },


  tooltip: {

    position: "absolute",

    right: "55px",

    whiteSpace: "nowrap",

    padding: "7px 13px",

    borderRadius: "20px",

    color: "#ffffff",

    fontSize: "11px",

    fontWeight: 800,

    pointerEvents: "none",

    transition:
      "all 0.25s ease",

    boxShadow:
      "0 5px 15px rgba(0,0,0,0.15)",

  },


  /* ==========================================
                  BACK TO TOP
  ========================================== */

  topButton: {

    position: "fixed",

    right: "25px",

    bottom: "25px",

    zIndex: 9500,

    width: "50px",

    height: "50px",

    borderRadius: "50%",

    border: "none",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    cursor: "pointer",

    color: "#ffffff",

    fontSize: "15px",

    background:
      "linear-gradient(135deg, #4f46e5, #ec4899)",

    boxShadow:
      "0 10px 30px rgba(79,70,229,0.35)",

  },

};


/* =====================================================
                      MOBILE
===================================================== */

if (
  typeof document !== "undefined" &&
  !document.getElementById(
    "colorful-church-home"
  )
) {

  const style =
    document.createElement("style");

  style.id =
    "colorful-church-home";

  style.innerHTML = `

    @media (max-width: 700px) {

      /* Brand */

      div[style*="NEW FOUNDATION"] {
        left: 12px !important;
        top: 12px !important;
      }

    }

    @media (max-width: 500px) {

      /* Smaller navigation */

      button[title="Home"],
      button[title="About"],
      button[title="Mission"],
      button[title="Ministries"],
      button[title="Sermons"],
      button[title="Gallery"],
      button[title="Events"] {

        width: 34px !important;
        height: 34px !important;
        font-size: 12px !important;

      }

    }

  `;

  document.head.appendChild(style);

}

