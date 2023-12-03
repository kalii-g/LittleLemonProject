import './index.css'
import BookingForm from './BookingForm'

const BookingPage = ({ availableTimes, dispatchDateChange, submitForm }) => {
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
