import { createBrowserRouter } from 'react-router-dom'
import { Cart } from '@pages/cart/page'
import { NotFound } from '@pages/notFound/page'
import { Layout } from './layout/layout'
<<<<<<< HEAD
import { Home } from '@pages/home/Home'
=======
import { Home } from '@pages/home/page'
>>>>>>> bc4dc46f61366447a587de0b3e929c70fc13bcdf

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
<<<<<<< HEAD
        path: '/',
        element: <Home />
=======
        element: <Home />,
        path: '/home'
>>>>>>> bc4dc46f61366447a587de0b3e929c70fc13bcdf
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
