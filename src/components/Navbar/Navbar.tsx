import { search, cart, profile, shoppe } from '@assets/index'
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className="navbar">
      <header className="navbar__logo">
        <img src={shoppe} alt="Shoope icon" />
      </header>
      <nav className="navbar__menu">
        <div className="navbar__list navbar__links">
          <div className="navbar__item">Shop</div>
          <div className="navbar__item">Blog</div>
          <div className="navbar__item">Our Story</div>
        </div>
        <div className="navbar__separator"></div>
        <div className="navbar__item--menu navbar__icons">
          <img src={search} alt="Search icon" />
          <img src={cart} alt="Cart icon" />
          <img src={profile} alt="Profile icon" />
        </div>
      </nav>
    </div>
  )
}
