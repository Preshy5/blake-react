import React, { useEffect } from 'react';
import '../styles/Blake.css';

function Header() {
  useEffect(() => {
    const navToggle = document.getElementById('navToggle');
    const navOverlay = document.getElementById('navOverlay');
    const rightContainer = document.querySelector('.right-container');

    if (navToggle && navOverlay && rightContainer) {
      navToggle.addEventListener('click', () => {
        navOverlay.classList.add('show');
        rightContainer.classList.add('show');
      });

      navOverlay.addEventListener('click', () => {
        navOverlay.classList.remove('show');
        rightContainer.classList.remove('show');
      });
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      if (navToggle && navOverlay) {
        navToggle.removeEventListener('click', () => {});
        navOverlay.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div>
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
          <div id="navToggle" style={{ fontSize: '40px' }}>&times;</div>
        </div>
        <div id="navOverlay"></div>
      </header>
    </div>
  );
}

export default Header;