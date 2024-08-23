import { Link } from 'react-router-dom'
import { IconColor, Logout } from '@assets/index'
import './menuMobile.scss'
import { SearchBar } from '@components/SearchBar'

const options: string[] = ['Home', 'Shop', 'About', 'Blog', 'Help', 'Contact', 'Search']
export const MenuMobile = () => {
  return (
    <>
      <SearchBar />
      <ul className="menuMobile__container">
        {options.map(element => {
          return (
            <li className="menuMobile__item" key={element}>
              <Link className="menuMobile__link" to={`/${element}`}>
                {element}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="menuMobile__account-method">
        <Link className="menuMobile__account-item" to="/account">
          <img src={IconColor} alt="My Account icon" />
          My account
        </Link>
        <Link className="menuMobile__account-item" to="/logout">
          <img src={Logout} alt="Logout icon" />
          Logout
        </Link>
      </div>
    </>
  )
}
