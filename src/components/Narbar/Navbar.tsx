import Shoppe from '@assets/Shoppe.svg'
import Profile from '@assets/Profile.svg'
import Cart from '@assets/Cart.svg'
import Search from '@assets/Search.svg'
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar__logo">
        <img src={Shoppe} alt="Shoope icon" />
      </div>
      <div className="navbar__menu">
        <div className="navbar__item navbar__links">
          <div>Shop</div>
          <div>Blog</div>
          <div>Our Story</div>
        </div>
        <div className="navbar__separator"></div>
        <div className="navbar__item navbar__icons">
          <img src={Search} alt="Search icon" />
          <img src={Cart} alt="Cart icon" />
          <img src={Profile} alt="Profile icon" />
        </div>
      </div>
    </div>
  )
}
