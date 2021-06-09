import { FC, ReactElement } from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

const AppLayout: FC = ({ children }): ReactElement => (
  <div className='flex flex-col min-h-screen'>
    <Head>
      <title>Sylvera Tech Test | Jerold Adjei-Ampofo</title>
      <meta
        name='description'
        content='Technical test for Sylvera - By Jerold Adjei-Ampofo'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default AppLayout
