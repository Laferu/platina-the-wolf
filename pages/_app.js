import { GlobalProvider } from '../utils/Context'
import '../public/DejaVu_Sans_Bold/stylesheet.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import GlobalStyles from '../utils/styles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp