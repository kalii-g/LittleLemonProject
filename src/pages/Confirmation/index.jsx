import { useLocation } from 'react-router-dom'
import './index.css'

const Success = () => {
  const { state } = useLocation()
  const { time, date, guests, occassion, notes } = state

  return (
    <div className="container">
      <div className="details-wrapper">
        <h1>Thank you for your reservation</h1>
        <p>Please see the details below:</p>
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
    </div>
  )
}

export default Success
