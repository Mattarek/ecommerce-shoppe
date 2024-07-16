import { search, cart, profile, shoppe } from '@assets/index'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={shoppe} alt="Shoope icon" />
      </div>
      <nav className="navbar__menu">
        <div className="navbar__list navbar__links">
          <NavLink to="/shop" className="navbar__item">
            Shop
          </NavLink>
          <NavLink to="/blog" className="navbar__item">
            Blog
          </NavLink>
          <NavLink to="/story" className="navbar__item">
            Our Story
          </NavLink>
        </div>
        <div className="navbar__separator"></div>
        <div className="navbar__item--menu navbar__icons">
          <img src={search} alt="Search icon" />
          <img src={cart} alt="Cart icon" />
          <img src={profile} alt="Profile icon" />
        </div>
      </nav>
    </header>
  )
}
