import { FC, ReactElement } from 'react'

const Footer: FC = (): ReactElement => (
  <div className='flex items-center w-full h-60 bg-black flex-shrink-0 mt-auto'>
    <div className='flex justify-center container mx-auto'>
      <p className='uppercase font-thin text-gray-400'>
        © 2021 Sylvera Tech Test | Jerold Adjei-Ampofo
      </p>
    </div>
  </div>
)

export default Footer
