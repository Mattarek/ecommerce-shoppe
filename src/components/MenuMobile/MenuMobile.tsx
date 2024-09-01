import { Link } from 'react-router-dom'

import { IconColor, Logout } from '@assets/index'
import { SearchBar } from '@components/SearchBar'
import { routes } from '../../utils/routesMenuMobile.const'

import './menuMobile.scss'

interface Props {
  setMenuMobile: (menuMobile: boolean) => void
}

export const MenuMobile = ({ setMenuMobile }: Props) => {
  return (
    <>
      <SearchBar />
      <ul className="menuMobile__container">
        {Object.values(routes).map(route => (
          <li className="menuMobile__item" key={route.name}>
            <Link
              className="menuMobile__link"
              to={`/${route.path}`}
              onClick={() => {
                setMenuMobile(false)
              }}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="menuMobile__account-method">
        <Link
          className="menuMobile__account-item"
          to="/account"
          onClick={() => {
            setMenuMobile(false)
          }}
        >
          <img src={IconColor} alt="My Account" />
          <span>My account</span>
        </Link>
        <Link
          className="menuMobile__account-item"
          to="/logout"
          onClick={() => {
            setMenuMobile(false)
          }}
        >
          <img src={Logout} alt="Logout" />
          <span>Logout</span>
        </Link>
      </div>
    </>
  )
}
