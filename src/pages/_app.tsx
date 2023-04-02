import Script from 'next/script'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '@/styles/globals.css'
import Nav from '@/components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router.pathname
  const renderNav = pathname === '/' || pathname === '/browse'
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="https://kit.fontawesome.com/a06045c397.js" />
      {renderNav && <Nav />}
      <Component {...pageProps} />
    </>
  )
}
