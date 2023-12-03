import { useState } from 'react'

const BookingForm = ({ availableTimes, dispatchDateChange, submitForm }) => {
  const [time, setTime] = useState(availableTimes[0])
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))
  const [guestCount, setGuestCount] = useState(0)
  const [occassion, setOccassion] = useState('Birthday')

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm({ time, date, guests: guestCount, occassion })
  }

  const getIsFormValid = () => {
    return time && date && guestCount >= 1 && occassion !== ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
            dispatchDateChange({ type: 'date_change', payload: e.target.value })
          }}
          required={true}
          id="res-date"
        />
      </div>

      <div className="form-control">
        <label htmlFor="res-time">Choose time</label>
        <div className="time-wrapper">
          {availableTimes.map((t, index) => {
            return (
              <div
                key={index}
                className={`time-pill ${t === time ? 'selected' : ''}`}
                onClick={() => {
                  setTime(t)
                }}
              >
                {t}
              </div>
            )
          })}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="guests">Number of guests</label>
        <div className="number-control">
          <span
            className={`minus ${guestCount < 1 && 'disabled'} `}
            onClick={() => {
              setGuestCount(guestCount - 1)
            }}
          >
            -
          </span>
          <input
            value={guestCount}
            type="text"
            required={true}
            id="guests"
            readOnly={true}
          />
          <span
            className={`plus ${guestCount > 19 && 'disabled'} `}
            onClick={() => {
              setGuestCount(guestCount + 1)
            }}
          >
            +
          </span>
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occassion}
          onChange={(e) => {
            setOccassion(e.target.value)
          }}
          required={true}
          id="occasion"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <div className="form-control">
        <button
          type="submit"
          value="Make Your reservation"
          disabled={!getIsFormValid()}
        >
          Make Your reservation
        </button>
      </div>
    </form>
  )
}

export default BookingForm
