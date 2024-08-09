import { createBrowserRouter } from 'react-router-dom'
import { Cart } from '@pages/cart/page'
import { NotFound } from '@pages/notFound/notFound'
import { Layout } from './layout/layout'
import { Home } from '@pages/home/Home'

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
        element: <Layout />,
        path: '/product'
      },
      {
        element: <Layout />,
        path: '/contact'
      },
      {
        element: <Layout />,
        path: '/account'
      },
      {
        element: <Layout />,
        path: '/recovery'
      },
      {
        element: <Layout />,
        path: '/provacy'
      },
      {
        element: <NotFound />,
        path: '*'
      }
    ]
  }
])
