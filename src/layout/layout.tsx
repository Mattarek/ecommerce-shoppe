import { Footer, Navbar } from '@components/index'
import { ReactNode } from 'react'
import './layout.scss'
interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
