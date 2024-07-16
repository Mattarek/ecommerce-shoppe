import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/page'
import { Cart } from '@pages/cart/page'
import { NotFound } from '@pages/notFound/notFound'

export const router = createBrowserRouter([
  {
    element: <Home />,
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
        element: <Home />,
        path: '/product'
      },
      {
        element: <Home />,
        path: '/contact'
      },
      {
        element: <Home />,
        path: '/account'
      },
      {
        element: <Home />,
        path: '/recovery'
      },
      {
        element: <Home />,
        path: '/provacy'
      },
      {
        element: <NotFound />,
        path: '*'
      }
    ]
  }
])
