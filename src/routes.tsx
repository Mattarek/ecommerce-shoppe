import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/page'
import { Cart } from '@pages/cart/page'

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
        element: <Home />,
        path: '/shop'
      },
      {
        element: <Home />,
        path: '/blog'
      },
      {
        element: <Home />,
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
      }
    ]
  },
  {
    element: <Home />,
    path: '*'
  }
])
