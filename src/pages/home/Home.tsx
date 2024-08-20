import { Hero } from '@components/Hero/Hero'
import { ProductsList } from '@components/ProductsList'
import { Product } from 'types/types'

import {
  HairPinSetof3,
  HalErrings,
  KaedeHairPinSetOf3,
  LireEarring,
  PlaineNeckle,
  YukiHairPinSetOf3
} from '@assets/index'
import { SearchBar } from '@components/SearchBar'

const productsList: Product[] = [
  {
    id: 1,
    name: 'Lira Earrings',
    price: 20.0,
    currency: '$',
    photoAlt: '',
    photoUrl: HairPinSetof3
  },
  { id: 2, name: 'HalErrings', price: 25.0, currency: '$', photoAlt: '', photoUrl: HalErrings },
  {
    id: 3,
    name: 'KaedeHairPinSetOf3',
    price: 30.0,
    currency: '$',
    photoAlt: '',
    photoUrl: KaedeHairPinSetOf3
  },
  {
    id: 4,
    name: 'LireEarring',
    price: 30.0,
    currency: '$',
    photoAlt: '',
    photoUrl: LireEarring
  },
  {
    id: 5,
    name: 'PlaineNeckle',
    price: 19.0,
    currency: '$',
    photoAlt: '',
    photoUrl: PlaineNeckle
  },
  {
    id: 6,
    name: 'YukiHairPinSetOf3',
    price: 29.0,
    currency: '$',
    photoAlt: '',
    photoUrl: YukiHairPinSetOf3
  }
]

export const Home = () => {
  return (
    <>
      <SearchBar />
      <Hero />
      <ProductsList products={productsList} />
    </>
  )
}
