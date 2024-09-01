import { createBrowserRouter } from 'react-router-dom'
import { Cart } from '@pages/cart/Cart'
import { NotFound } from '@pages/notFound/NotFound'
import { Layout } from './layout/layout'
import { Home } from '@pages/home/Home'

import { Privacy } from './pages/privacy/Privacy'
import { About } from '@pages/about/About'
import { ResetPassword } from '@pages/resetPassword/ResetPassword'
import { Account } from '@pages/account/Account'

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
