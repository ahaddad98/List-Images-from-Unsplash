import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { Level }  from 'level'

// Create a database

export default function App({ Component, pageProps }: AppProps) {
  const db = new Level('example', { valueEncoding: 'json' })
  return <Component {...pageProps} />
}
