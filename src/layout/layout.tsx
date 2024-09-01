import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Footer, Navbar } from './'
import { MenuMobile } from '@components/MenuMobile/MenuMobile'
import './layout.scss'

export const Layout = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <div className="container">
      <Navbar menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
      {menuMobile ? (
        <MenuMobile setMenuMobile={setMenuMobile} />
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
