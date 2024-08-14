import { searchLoop } from '@assets/index'
import './SearchBar.scss'

export const SearchBar = () => {
  return (
    <div>
      <img src={searchLoop} alt="Search loop" className="searchLoop" />
      <input className="searchBar" placeholder="Search" />
    </div>
  )
}
