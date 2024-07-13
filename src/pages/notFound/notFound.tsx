import { NavLink } from 'react-router-dom'
import './notFound.scss'

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__header">404 ERROR</h1>
      <p className="notFound__paragraph">This page not found, back to home and start again</p>
      <NavLink to="/" className="notFound__link">
        Homepage
      </NavLink>
    </div>
  )
}
