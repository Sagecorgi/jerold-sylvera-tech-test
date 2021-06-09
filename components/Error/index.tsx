import { FC, ReactElement } from 'react'
import { FaFrown } from 'react-icons/fa'

import Main from '../Main'
import Container from '../Container'

const Error: FC = (): ReactElement => (
  <Main className='flex items-center flex-grow'>
    <Container>
      <div className='flex flex-col items-center justify-center h-full text-center'>
        <FaFrown className='text-8xl md:text-9xl mb-8' />
        <h1 className='text-xl md:text-4xl font-bold uppercase tracking-[2px]'>
          There seems to be an error!
        </h1>
        <p className='md:text-xl'>
          Seems to be an issue with fetching repositories. Please try again
          later!
        </p>
      </div>
    </Container>
  </Main>
)

export default Error
