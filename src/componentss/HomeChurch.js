// src/pages/ChurchHome.js
import React, { useState, useEffect } from 'react';
import HeroSlider from '../componentss/HeroSlider';
import ScriptureTicker from '../componentss/ScriptureTicker';
import AboutSection from '../componentss/AboutSection';
import SermonsHighlight from '../componentss/SermonsHighlight';
import GalleryPreview from '../componentss/GalleryPreview';
import ContactFooter from '../componentss/ContactFooter';
import MinistriesSection from '../componentss/MinistriesSection';
import EventsPreview from '../componentss/EventsPreview';
import MissionStatement from '../componentss/MissionStatement';
import Founder from '../componentss/FounderSection';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBullseye, 
  FaHandsHelping, 
  FaBible, 
  FaImages, 
  FaCalendarAlt, 
  FaEnvelope 
} from 'react-icons/fa';

const menuItems = [
  { id: 'hero', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaInfoCircle /> },
  { id: 'mission', label: 'Mission', icon: <FaBullseye /> },
  { id: 'ministries', label: 'Ministries', icon: <FaHandsHelping /> },
  { id: 'sermons', label: 'Sermons', icon: <FaBible /> },
  { id: 'gallery', label: 'Gallery', icon: <FaImages /> },
  { id: 'events', label: 'Events', icon: <FaCalendarAlt /> },
  // { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const HomeChurch = () => {
  const [active, setActive] = useState('hero');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: 'linear-gradient(90deg, #0b1d51, #1a2a6c, #16213e)', // premium dark gradient
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    navItems: {
      display: 'flex',
      gap: '35px',
    },
    navItem: (isActive) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '10px 18px',
      cursor: 'pointer',
      color: isActive ? '#00ffe0' : '#cfd8dc', // active teal, inactive light grey
      fontWeight: 500,
      fontSize: '16px',
      transition: 'color 0.3s, transform 0.2s',
    }),
    icon: {
      fontSize: '18px',
    },
    underline: (isActive) => ({
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '3px',
      width: isActive ? '100%' : '0%',
      background: '#00ffe0',
      borderRadius: '2px',
      transition: 'width 0.3s',
      boxShadow: isActive ? '0 0 10px #00ffe0' : 'none',
    }),
  };

  return (
    <div>
      {/* Top Navigation Tabs */}
      <nav style={styles.nav}>
        <div style={styles.navItems}>
          {menuItems.map((item) => {
            const isActive = active === item.id;
            return (
              <div
                key={item.id}
                style={styles.navItem(isActive)}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00ffe0')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? '#00ffe0' : '#cfd8dc')
                }
              >
                <span style={styles.icon}>{item.icon}</span>
                {item.label}
                <span style={styles.underline(isActive)} />
              </div>
            );
          })}
        </div>
      </nav>

      {/* Sections */}
      <div id="hero">
        <HeroSlider />
        <ScriptureTicker />
        <Founder />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="mission">
        <MissionStatement />
      </div>

      <div id="ministries">
        <MinistriesSection />
      </div>

      <div id="sermons">
        <SermonsHighlight />
      </div>

      <div id="gallery">
        <GalleryPreview />
      </div>

      <div id="events">
        <EventsPreview />
      </div>

      {/* <div id="contact">
        <ContactFooter />
      </div> */}
    </div>
  );
};

export default HomeChurch;
