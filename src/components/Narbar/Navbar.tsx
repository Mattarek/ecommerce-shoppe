// import Shoppe from '@assets/Shoppe.svg'
// import profile from '@assets/Profile.svg'
// import cart from '@assets/Cart.svg'
// import search from '@assets/Search.svg'
import {search, cart, profile, Shoppe} from '@assets/'
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar__logo">
        <img src={Shoppe} alt="Shoope icon" />
      </div>
      <div className="navbar__menu">
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
      </div>
    </div>
  )
}
