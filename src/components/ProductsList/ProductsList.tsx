import { Link } from 'react-router-dom'
import { Product } from 'types/types'
import './ProductsList.scss'

interface Props {
  products: Product[]
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div className="product">
      <div className="product__information">
        <h2>Shop the Latest</h2>
        <Link to="productsList">View All</Link>
      </div>
      <ul className="product__list">
        {products.map(product => (
          <li className="product__list-container" key={product.id}>
            <img className="product__image" src={product.photoUrl} alt={product.photoAlt} />
            <p className="product__name">{product.name}</p>
            <p className="product__price">
              {product.currency} {product.price.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
