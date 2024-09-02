import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/layout'
import { Privacy, About, Home, ResetPassword, NotFound, Cart, Shop } from '@pages/index'

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
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/blog'
      },
      {
        element: <About />,
        path: '/about'
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
        element: <ResetPassword />,
        path: '/resetPassword'
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
