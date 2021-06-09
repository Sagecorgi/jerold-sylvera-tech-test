import { FC, ReactElement } from 'react'

const Container: FC<{ className?: string }> = ({
  className,
  children,
}): ReactElement => (
  <div className={`container mx-auto relative ${className ? className : ''}`}>
    {children}
  </div>
)

export default Container
