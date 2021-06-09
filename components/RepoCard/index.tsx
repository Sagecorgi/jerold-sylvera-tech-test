import { FC, ReactElement } from 'react'
import { GoIssueOpened } from 'react-icons/go'

import { truncate } from '../../utils'
import Pill from '../../components/Pill'
import Button from '../../components/Button'

const RepoCard: FC<{ repo: Repo }> = ({ repo }): ReactElement => (
  <div className='flex flex-col text-left items-start w-full py-8 px-6 shadow-lg rounded-lg bg-white text-xs'>
    <div className='flex w-full items-center'>
      <h1 className='font-bold text-[14px] mr-auto'>{repo.name}</h1>
      <div className='flex items-center text-red-700'>
        <GoIssueOpened size={20} className='fill-current' />
        <span className='font-bold text-sm'>{repo.open_issues}</span>
      </div>
    </div>
    <div className='my-3'>
      <Pill label='Language' value={repo.language} sm />
    </div>
    <p
      className={`leading-[16px] mt-2 mb-14 ${
        !repo.description ? 'text-gray-400 italic' : ''
      }`}
    >
      {truncate(repo.description) || 'No description...'}
    </p>
    <Button
      className='mt-auto'
      text='View Repo Details'
      to={`/${repo.owner.login}/${repo.name}`}
    />
  </div>
)

export default RepoCard
