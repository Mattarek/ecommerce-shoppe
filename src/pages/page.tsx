import { Outlet } from 'react-router-dom'
import { Layout } from '../layout/layout'

export function Home() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
