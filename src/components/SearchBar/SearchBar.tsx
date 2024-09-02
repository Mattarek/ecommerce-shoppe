import { searchLoop } from '@assets/index'
import './SearchBar.scss'

export const SearchBar = () => {
  return (
    <div className="searchBar__container">
      <img src={searchLoop} alt="Search loop" className="searchLoop" />
      <input className="searchBar" placeholder="Search" />
    </div>
  )
}
