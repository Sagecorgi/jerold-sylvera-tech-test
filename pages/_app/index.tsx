import type { AppProps } from 'next/app'
import AppLayout from '../../components/AppLayout'

import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
)

export default MyApp
