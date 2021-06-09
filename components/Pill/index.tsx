import { FC, ReactElement } from 'react'

const Pill: FC<{
  label: string
  value?: string | number | null
  sm?: boolean
}> = ({ label, value, sm }): ReactElement | null => {
  const pillSize = sm ? 'px-2 py-1' : 'px-3 py-2'

  if (!value) {
    return null
  }

  return (
    <div className='inline-flex rounded overflow-hidden text-white font-thin text-xs'>
      <div className={`${pillSize} bg-gray-800`}>{label}</div>
      <div className={`${pillSize} bg-gradient-to-r from-blue-600 to-blue-400`}>
        {value}
      </div>
    </div>
  )
}

export default Pill
