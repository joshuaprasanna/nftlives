import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaChurch, FaImages, FaRegCalendarAlt, FaPrayingHands, FaInfoCircle, FaPhone } from 'react-icons/fa';
//import './SidebarMenu.css'; // Optional CSS

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleScroll('hero')}><FaHome /> Home</li>
          <li onClick={() => handleScroll('about')}><FaInfoCircle /> About</li>
           <li onClick={() => handleScroll('mission')}><FaPhone /> Mission</li>
          <li onClick={() => handleScroll('ministries')}><FaPrayingHands /> Ministries</li>
          <li onClick={() => handleScroll('sermons')}><FaChurch /> Sermons</li>
          <li onClick={() => handleScroll('gallery')}><FaImages /> Gallery</li>
          <li onClick={() => handleScroll('events')}><FaRegCalendarAlt /> Events</li>
          <li onClick={() => handleScroll('contact')}><FaPhone /> Contact</li>
        </ul>
      </div>

      <style>{`
        .sidebar-toggle {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 999;
          cursor: pointer;
          color: white;
          background: #333;
          border-radius: 8px;
          padding: 6px;
        }

        .sidebar {
          position: fixed;
          top: 60px;
          left: -220px;
          width: 200px;
          height: auto;
          background: #222;
          padding: 20px 10px;
          z-index: 998;
          transition: all 0.3s ease;
          border-radius: 0 10px 10px 0;
        }

        .sidebar.open {
          left: 0;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar li {
          color: #fff;
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .sidebar li:hover {
          background: #444;
        }
      `}</style>
    </>
  );
};

export default SidebarMenu;
