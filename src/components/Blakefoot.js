/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from '../assets/images/apple.svg'
import Image1 from '../assets/images/playstore.svg'
import '../styles/Blake.css'

function Blakefoot() {
  return (
    <div className='footer'>
      <div className='footerDiv'>

        <div className="footer1">
          <h3>CONTACT US</h3>
          <p>Phone: +2349039615666</p>
          <p>Email:<a href=""> hello@myblake.app</a></p>
        </div>

        <div className="footer1">
          <h3>ADDRESS</h3>
          <p>Elzazi complex, Opposite Westharm petrol station along gbalajam/Akpajo road, woji ( Odili Road,
            Port-Harcourt )</p>
        </div>

        <div className="footer1">
          <h3>DOWNLOAD</h3>
          <div className='footerImg'>
            <div className='imgs'>
              <img src={Image} alt='' />
            </div>
            <div className='imgs'>
              <img src={Image1} alt='' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blakefoot
