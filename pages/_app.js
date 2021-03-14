import { GlobalProvider } from '../utils/Context'
import '../public/DejaVu_Sans_Bold/stylesheet.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Router from 'next/router'
import GlobalStyles from '../utils/styles'

const MyApp = ({ Component, pageProps }) => {
  // Router.events.on('routeChangeStart', () => NProgress.start())
  // Router.events.on('routeChangeComplete', () => NProgress.done())
  // Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <GlobalProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp