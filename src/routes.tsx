import { createBrowserRouter } from 'react-router-dom'
import { Cart } from '@pages/cart/page'
import { NotFound } from '@pages/notFound/page'
import { Layout } from './layout/layout'
import { Home } from '@pages/home/Home'

import { Privacy } from './pages/privacy/privacy'
import { About } from '@pages/about/page'
import { ResetPassword } from '@pages/resetPassword/ResetPassword'

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
