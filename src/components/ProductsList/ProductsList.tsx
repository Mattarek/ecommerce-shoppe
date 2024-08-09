import './ProductsList.scss'
interface Product {
  photoUrl: string
  photoAlt: string
  name: string
  price: number
  currency: string
}

interface Props {
  products: Product[]
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div className="product">
      {products.map(product => (
        <>
          <img className="product__image" src={product.photoUrl} alt={product.photoAlt} />
          <p className="product_name">{product.name}</p>
          <p className="product_price">
            {product.currency} {product.price}
          </p>
        </>
      ))}
    </div>
  )
}
