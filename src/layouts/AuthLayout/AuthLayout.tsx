import { Fragment } from 'react'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
interface Props {
  children?: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main> {children} </main>
      <Footer />
    </Fragment>
  )
}
