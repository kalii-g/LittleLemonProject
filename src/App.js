import { useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import BookingPage from './pages/Booking'
import Success from './pages/Confirmation'
import HomePage from './pages/Home'
import { fetchAPI } from './mockApi'

const updateTimes = (state, action) => {
  if (action.type === 'date_change') {
    return fetchAPI(new Date(action.payload))
  }
}

function App() {
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
