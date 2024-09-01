import { Link } from 'react-router-dom'
import heroPhoto from '../../assets/hero.png'
import './Hero.scss'

export const Hero = () => {
  return (
    <div className="hero">
      <img className="hero__image" src={heroPhoto} alt="Hero img with girl" />
      <div className="hero__description">
        <h2 className="hero__description-title">Gold Big Hoops</h2>
        <span className="hero__description-price">$ 68.00</span>
        <Link to="products">
          <button className="hero__description-button">View Product</button>
        </Link>
      </div>
    </div>
  )
}
