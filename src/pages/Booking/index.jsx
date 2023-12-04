import './index.css'
import BookingForm from './BookingForm'
import { submitAPI } from '../../mockApi'
import { useNavigate } from 'react-router-dom'

const BookingPage = ({ availableTimes, dispatchDateChange }) => {
  const navigate = useNavigate()

  const submitForm = (formData) => {
    const success = submitAPI(formData)

    if (success) {
      navigate('/confirmation', { state: formData })
    }
  }
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Reserve a table</h1>
        </div>
      </div>
      <div className="page-content container">
        <p></p>
        <BookingForm
          availableTimes={availableTimes}
          dispatchDateChange={dispatchDateChange}
          submitForm={submitForm}
        />
      </div>
    </>
  )
}

export default BookingPage
