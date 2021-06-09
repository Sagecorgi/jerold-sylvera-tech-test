import { render } from '@testing-library/react'
import Header from '../components/Header/index'

test('renders page header', async () => {
  const { getByRole } = render(<Header />)

  expect(getByRole('heading', { level: 1 })).toHaveTextContent(
    'Sylvera Tech Test',
  )
})
