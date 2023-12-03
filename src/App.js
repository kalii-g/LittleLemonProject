import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import BookingPage from './pages/Booking'
import HomePage from './pages/Home'
import { fetchAPI, submitAPI } from './mockApi'

const updateTimes = (state, action) => {
  if (action.type === 'date_change') {
    return fetchAPI(new Date(action.payload))
  }
}

const Success = () => {
  const { state } = useLocation()
  const { time, date, guests, occassion, notes } = state
  useEffect(() => {
    console.log(state)
  }, [])
  //const { time, date, guests, occassion } = route.params
  return (
    <div className="container">
      Thank you for your reservation. Please see the details below.
      <p>
        <strong>When: </strong>
        <span>
          {date}, {time}
        </span>
      </p>
      <p>
        <strong>Number of guests: </strong>
        <span>{guests}</span>
      </p>
      <p>
        <strong>Special occasion: </strong>
        <span>{occassion}</span>
      </p>
      <p>
        <strong>Additional notes: </strong>
        <span>{notes ? notes : 'N/A'}</span>
      </p>
    </div>
  )
}

function App() {
  const navigate = useNavigate()

  const submitForm = (formData) => {
    const success = submitAPI(formData)

    if (success) {
      navigate('/confirmation', { state: formData })
    }
  }

  const initializeTimes = () => {
    return fetchAPI(new Date())
  }

  const [availableTimes, dispatchDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route
          path="/book"
          exact
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchDateChange={dispatchDateChange}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmation" exact element={<Success />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
