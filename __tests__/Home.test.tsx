import { screen, waitFor } from '@testing-library/react'
import { getPage } from 'next-page-tester'

import { mockedRepos } from '../__mocks__/mocks'

test('displays list of repositories', async () => {
  const { render } = await getPage({
    route: '/',
  })

  render()

  await waitFor(() => {
    mockedRepos.forEach(({ name }) => {
      expect(
        screen.getByRole('heading', { level: 1, name }),
      ).toBeInTheDocument()
    })
  })
})
