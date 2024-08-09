import {
  search,
  cart,
  profile,
  shoppe,
  cartActive,
  hamburger,
  cartOne,
  elipse,
  line
} from '@assets/index'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={shoppe} alt="Shoope icon" />
      </div>
      <nav className="navbar__menu">
        <div className="navbar__desktop">
          <div className="navbar__links">
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

          <div className="navbar__separator">
            <img src={line} alt="Separator line" />
          </div>
          <div className="navbar__icons">
            <img src={search} alt="Search icon" />
            <img src={cart} alt="Cart icon" />
            <img src={profile} alt="Profile icon" />
          </div>
        </div>
        <div className="navbar__mobile">
          <div className="navbar__cart">
            <img className="navbar__cartActive" src={cartActive} alt="Cart active icon" />
            <img className="navbar__cartActiveOne" src={cartOne} alt="Cart one product signal" />
            <img className="navbar__elipse" src={elipse} alt="Elipse" />
          </div>
          <div>
            <img src={hamburger} alt="Hamburger icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}
