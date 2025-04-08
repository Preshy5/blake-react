import React from 'react';
import '../styles/Blake.css';

function Header() {

  const container = document.querySelector('.header-container');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 20) {
      container.style.backgroundColor = '#ffffff';
      container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    } else {
      container.style.backgroundColor = '#fff3e4';
      container.style.boxShadow = 'none';
    }
  })

  const navToggle = document.getElementById('navToggle')
  const navOverlay = document.getElementById('navOverlay')
  const rightContainer = document.querySelector('.right-container')

  navToggle.addEventListener('click', () => {
    if (navToggle) {
      navOverlay.classList.add('show')
      rightContainer.classList.add('show')
    }
  })

  navOverlay.addEventListener('click', () => {
    if (navOverlay) {
      navOverlay.classList.remove('show')
      rightContainer.classList.remove('show')
    }
  })
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