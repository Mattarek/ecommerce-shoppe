import { Link } from 'react-router-dom'
import { IconColor, Logout } from '@assets/index'
import './menuMobile.scss'

const options: string[] = ['Home', 'Shop', 'About', 'Blog', 'Help', 'Contact', 'Search']
export const MenuMobile = () => {
  return (
    <>
      <ul className="menuMobile__container">
        {options.map(element => {
          return (
            <li className="menuMobile__item" key={element}>
              <Link to={`/${element}`}></Link>
              {element}
            </li>
          )
        })}
      </ul>
      <Link to="/account">
        <img src={IconColor} alt="My Account icon" />
        My account
      </Link>
      <Link to="/logout">
        <img src={Logout} alt="Logout icon" />
        Logout
      </Link>
    </>
  )
}
