import { createBrowserRouter } from 'react-router-dom'
import { Cart } from '@pages/cart/page'
import { NotFound } from '@pages/notFound/notFound'
import { Layout } from './layout/layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
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
