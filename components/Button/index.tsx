import { FC, ReactElement, ReactNode, Fragment } from 'react'
import Link from 'next/link'

const Button: FC<{ className: string; text: string; to: string }> = ({
  className,
  text,
  to,
}): ReactElement => (
  <Link href={to}>
    <a className={`text-black underline ${className ? className : ''}`}>
      {text}
    </a>
  </Link>
)

export default Button
