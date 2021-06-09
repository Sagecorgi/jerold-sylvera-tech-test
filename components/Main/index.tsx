import { FC, ReactElement } from 'react'

const Main: FC<{ className?: string }> = ({
  className,
  children,
}): ReactElement => (
  <div className={`w-full ${className ? className : ''}`}>{children}</div>
)

export default Main
