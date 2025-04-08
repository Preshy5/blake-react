/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Blake.css';
import playstore from '../assets/images/playstore.svg';
import apple from '../assets/images/apple.svg';

function Footer() {
  return (
    <footer className="footer section-p1">
      <div className="footerDiv">
        <div className="footer1">
          <h3>CONTACT US</h3>
          <p>
            Phone: <span style={{ color: 'black' }}>+2349039615666</span>
          </p>
          <p>Email: hello@myblake.app</p>
        </div>
        <div className="footer1">
          <h3>ADDRESS</h3>
          <p>
            Elzazi complex, Opposite Westharm petrol station along gbalajam/Akpajo road, woji (Odili Road, Port-Harcourt)
          </p>
        </div>
        <div className="footer1">
          <h3>DOWNLOAD</h3>
          <div className="footerImg">
            <div className="imgs">
              <img src={playstore} alt="Playstore" />
            </div>
            <div className="imgs">
              <img src={apple} alt="Apple Store" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;