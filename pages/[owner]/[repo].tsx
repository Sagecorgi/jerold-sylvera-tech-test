import { FC, ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import moment from 'moment'
import { GoIssueOpened } from 'react-icons/go'
import _ from 'lodash'

import Main from '../../components/Main'
import Container from '../../components/Container'
import Pill from '../../components/Pill'
import Error from '../../components/Error'

const Repo: FC<{ data: Repo }> = ({ data }): ReactElement => {
  if (_.isEmpty(data)) {
    return <Error />
  }

  return (
    <Main>
      <div className='w-full bg-gray-50 py-14'>
        <Container className='flex items-center'>
          <div className='flex flex-col mr-auto'>
            <h1 className='font-bold text-4xl mb-2'>{data.name}</h1>
            <p className='text-gray-500 font-thin'>
              Published {moment(data.pushed_at).format('Do MMMM YYYY')}
            </p>
          </div>
          <div className='flex items-center text-red-700 text-lg'>
            <GoIssueOpened size={20} className='fill-current mr-2' />
            <span className='font-bold'>Issues: &nbsp;</span>
            <span>{data.open_issues}</span>
          </div>
        </Container>
      </div>
      <div className='my-8'>
        <Container className='flex gap-8'>
          <Pill label='Language' value={data.language} />
          <Pill label='Size' value={data.size + ' kb'} />
          <Pill label='Forks' value={data.forks} />
          <Pill label='Watchers' value={data.watchers} />
        </Container>
      </div>
      <div>
        <Container>
          <p>{data.description}</p>
        </Container>
      </div>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.github.com/repos/${context?.params?.owner}/${context?.params?.repo}`,
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Repo
