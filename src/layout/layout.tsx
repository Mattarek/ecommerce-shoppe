import { Footer, Navbar } from '@components/index'
import { Outlet } from 'react-router-dom'
import './layout.scss'

export const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
