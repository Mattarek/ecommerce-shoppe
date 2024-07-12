import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/page'

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/'
  },
  {
    element: <Home />,
    path: '/cart'
  },
  {
    element: <Home />,
    path: '/shop'
  }
])
