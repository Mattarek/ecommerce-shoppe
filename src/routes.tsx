import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout'
import { Cart, NotFound, Home, Privacy, About, ResetPassword, Account } from '@pages/index'

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
        path: '/account',
        element: <Account />
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
