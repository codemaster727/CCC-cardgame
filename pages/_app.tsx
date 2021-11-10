import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Provider } from "../context"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee)

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider> 
    </Provider>
  )
}

export default MyApp
