import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Home from './Home'

function MyApp({ Component, pageProps }: AppProps) {
  return <Home{...pageProps} />
}

export default MyApp
