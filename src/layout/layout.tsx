import { Footer, Navbar } from './'
import { Outlet } from 'react-router-dom'
import './layout.scss'
import { useState } from 'react'
import { MenuMobile } from '@components/MenuMobile/MenuMobile'

export const Layout = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  return (
    <div className="container">
      <Navbar menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
      {menuMobile ? (
        <MenuMobile />
      ) : (
        <>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
