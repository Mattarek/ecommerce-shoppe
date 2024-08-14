import { createBrowserRouter } from 'react-router-dom'
import { Cart } from '@pages/cart/page'
import { NotFound } from '@pages/notFound/page'
import { Layout } from './layout/layout'
import { Home } from '@pages/home/Home'
import { About } from '@pages/about/page'
import { Privacy } from './pages/privacy/privacy'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        element: <Cart />,
        path: '/cart'
      },
      {
        path: '/shop'
      },
      {
        path: '/blog'
      },
      {
        path: '/story'
      },
      {
        path: '/product'
      },
      {
        path: '/contact'
      },
      {
        path: '/account'
      },
      {
        path: '/recovery'
      },
      {
        path: '/provacy'
      },
      {
        element: <About />,
        path: '/about'
      },
      {
        element: <Privacy />,
        path: '/privacy'
      },
      {
        element: <NotFound />,
        path: '*'
      }
    ]
  }
])
