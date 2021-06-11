import { InferGetServerSidePropsType } from 'next'
import _ from 'lodash'
import fetch from 'node-fetch'

import Main from '../components/Main'
import Container from '../components/Container'
import RepoCard from '../components/RepoCard'
import Error from '../components/Error'

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const renderRepoCards = (data: Repos) => {
    const repos = data.map((repo: Repo) => {
      return <RepoCard key={repo.id} repo={repo} />
    })

    return repos
  }

  if (_.isEmpty(data)) {
    return <Error />
  }

  return (
    <Main className='bg-gray-50 py-8 md:py-14 lg:py-20'>
      <Container>
        <div className='flex flex-col items-center justify-center h-full text-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 md:gap-y-8 w-full'>
            {renderRepoCards(data)}
          </div>
        </div>
      </Container>
    </Main>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/orgs/github/repos')
  const data: Repos = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
