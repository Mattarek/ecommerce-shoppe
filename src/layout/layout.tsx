import { Footer, Navbar } from '@components/index'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '3vh 3vw', height: '3rem' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
