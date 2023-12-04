import {
  render,
  screen,
  fireEvent,
  waitFor,
  queryByAttribute,
} from '@testing-library/react'
import BookingForm from './BookingForm'
import BookingPage from './'
import { fetchAPI } from '../../mockApi'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

export const queryById = queryByAttribute.bind(null, 'id')

test('Renders the BookingForm heading', () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatchDateChange={() => ['19:00', '21:30']}
      submitForm={() => {}}
    />
  )
  const headingElement = screen.getByText('Make your reservation')
  expect(headingElement).toBeInTheDocument()
})

test('Input date', async () => {
  const presetDate = '2023-12-22'
  const { getByTestId, getAllByTestId, findByTestId, findAllByTestId } = render(
    <BrowserRouter>
      <BookingPage
        availableTimes={fetchAPI(new Date(presetDate))}
        dispatchDateChange={() => fetchAPI(new Date(presetDate))}
      />
    </BrowserRouter>
  )
  const input = getByTestId('date-picker')
  const _availableTimes = fetchAPI(new Date(presetDate))
  await act(async () => {
    fireEvent.change(input, { target: { value: presetDate } })
  })

  expect(getAllByTestId('time-item').map((item) => item.textContent)).toEqual(
    _availableTimes
  )
})

test('Name length', async () => {
  const dom = render(
    <BookingForm
      availableTimes={[]}
      dispatchDateChange={() => ['19:00', '21:30']}
      submitForm={() => {}}
    />
  ).container

  const input = queryById(dom, 'res-name')
  fireEvent.change(input, { target: { value: 'T' } })
  fireEvent.blur(input)

  await waitFor(() => {
    expect(
      screen.getByText('Name must be at least 2 characters long')
    ).toBeInTheDocument()
  })
})

test('Gest count', async () => {
  const dom = render(
    <BookingForm
      availableTimes={[]}
      dispatchDateChange={() => ['19:00', '21:30']}
      submitForm={() => {}}
    />
  ).container

  const input = queryById(dom, 'guests')
  fireEvent.change(input, { target: { value: 0 } })
  fireEvent.blur(input)

  await waitFor(() => {
    expect(
      screen.getByText('Number of guests should be at least 1')
    ).toBeInTheDocument()
  })
})
