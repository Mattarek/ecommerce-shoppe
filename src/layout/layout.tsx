import { Footer, Navbar } from '@components/index'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '3vh 5vw',
        maxHeight: '100vh',
        maxWidth: '100vw'
      }}
    >
      <Navbar />
      {children}
      <div style={{ display: 'block', height: '60vh', width: '100%' }}></div>
      <Footer />
    </div>
  )
}
