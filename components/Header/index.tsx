import { FC, ReactElement } from 'react'
import Link from 'next/link'

const Header: FC = (): ReactElement => (
  <div className='flex items-center w-full h-20 bg-black flex-shrink-0'>
    <div className='container mx-auto'>
      <Link href='/'>
        <a className='cursor-pointer'>
          <h1 className='font-bold text-lg text-white tracking-[4px] uppercase'>
            Sylvera Tech Test
          </h1>
          <p className='text-xs text-[#cccccc] tracking-[5.9px] uppercase leading-3	'>
            Jerold Adjei-Ampofo
          </p>
        </a>
      </Link>
    </div>
  </div>
)

export default Header
