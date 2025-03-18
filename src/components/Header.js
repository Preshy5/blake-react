import React from 'react'
import '../styles/Blake.css'

function Header() {
  return (
    <div>
      <section className="header-container scrolled">
        <div className="left-container">
          <div className='title'>
            <div className='logo'></div>
            <p>Build with Blake</p>
          </div>
        </div>

        <div className="right-container">
          <button className="call">Let's Call You</button>
          <button className="build">Let's Build For You</button>
        </div>
      </section>
    </div>
  )
}

export default Header
