import { searchLoop } from '@assets/index'
import './SearchBar.scss'

export const SearchBar = () => {
  return (
    <>
      <img src={searchLoop} alt="Search loop" className="searchLoop" />
      <input className="searchBar" placeholder="Search" />
    </>
  )
}
