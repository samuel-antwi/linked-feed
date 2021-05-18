import Head from 'next/head'
import Footer from './Footer'
import MobileNav from './Nav/MobileNav'
import Navbar from './Nav/Navbar'

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Navbar />
      <MobileNav />
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'LinkedIn Clone',
  description: 'A cool project to showcase my front-end skills',
}
