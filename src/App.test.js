import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { fetchAPI } from './mockApi'

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const linkElement = screen.getByText('Little Lemon')
  expect(linkElement).toBeInTheDocument()
})

test('fetch api', () => {
  const initializeTimes = fetchAPI(new Date())

  expect(initializeTimes.length > 0).toBeTruthy()
})
