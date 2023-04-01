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
      {renderNav && <Nav />}
      <Component {...pageProps} />
    </>
  )
}
