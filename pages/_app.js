import { GlobalProvider } from '../utils/Context'
import '../public/DejaVu_Sans_Bold/stylesheet.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp