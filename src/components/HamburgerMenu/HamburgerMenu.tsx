import React, { useState } from 'react'
import { hamburger, hamburgerActive } from '@assets/index'
import './HamburgerMenu.scss'

const HamburgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="hamburger-menu">
      <button className="hamburger-menu__icon" onClick={toggleMenu}>
        <img src={menuOpen ? hamburgerActive : hamburger} alt="Menu Icon" />
      </button>
      <div
        className={`hamburger-menu__overlay ${menuOpen ? 'hamburger-menu__overlay--visible' : ''}`}
      >
        <button className="hamburger-menu__overlay__close" onClick={toggleMenu}>
          <img src={hamburgerActive} alt="Close Menu Icon" />
        </button>
        <ul className="hamburger-menu__overlay__menu">
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#home" className="hamburger-menu__overlay__menu__item__link">
              Home
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#shop" className="hamburger-menu__overlay__menu__item__link">
              Shop
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#about" className="hamburger-menu__overlay__menu__item__link">
              About
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#blog" className="hamburger-menu__overlay__menu__item__link">
              Blog
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#help" className="hamburger-menu__overlay__menu__item__link">
              Help
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#contact" className="hamburger-menu__overlay__menu__item__link">
              Contact
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#search" className="hamburger-menu__overlay__menu__item__link">
              Search
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#account" className="hamburger-menu__overlay__menu__item__link">
              My account
            </a>
          </li>
          <li className="hamburger-menu__overlay__menu__item">
            <a href="#logout" className="hamburger-menu__overlay__menu__item__link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HamburgerMenu
