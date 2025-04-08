import React, { useEffect } from 'react';
import '../styles/Blake.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  useEffect(() => {
    const container = document.querySelector('.header-container');
    const navToggle = document.getElementById('navToggle');
    const navOverlay = document.getElementById('navOverlay');
    const rightContainer = document.querySelector('.right-container');

    if (container && navToggle && navOverlay && rightContainer) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 20) {
          container.style.backgroundColor = '#ffffff';
          container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        } else {
          container.style.backgroundColor = '#fff3e4';
          container.style.boxShadow = 'none';
        }
      };

      const handleNavToggleClick = () => {
        navOverlay.classList.add('show');
        rightContainer.classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
      };

      const handleNavOverlayClick = () => {
        navOverlay.classList.remove('show');
        rightContainer.classList.remove('show');
        document.querySelector('body').style.overflow = 'auto';
      };

      window.addEventListener('scroll', handleScroll);
      navToggle.addEventListener('click', handleNavToggleClick);
      navOverlay.addEventListener('click', handleNavOverlayClick);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        navToggle.removeEventListener('click', handleNavToggleClick);
        navOverlay.removeEventListener('click', handleNavOverlayClick);
      };
    }
  }, []);

  return (
    <header className="header-container">
      <div className="header">
        <div className="left-container">
          <div className="logoHead">
            <div className="logo"></div>
            <p>Build with Blake</p>
          </div>
        </div>

        <div className="right-container">
          <div className="logoHead logoHeadNav">
            <div className="logo"></div>
            <p>Build with Blake</p>
          </div>
          <button className="call">Let's Call You</button>
          <button className="build">Let's Build For You</button>
        </div>

        <div id="navToggle">
          <FaBars style={{ fontSize: '40px', cursor: 'pointer' }} />
        </div>
      </div>
      <div id="navOverlay"></div>
    </header>
  );
}

export default Header;