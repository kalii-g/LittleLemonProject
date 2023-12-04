import { useState } from 'react'

const BookingForm = ({ availableTimes, dispatchDateChange, submitForm }) => {
  const [time, setTime] = useState(availableTimes[0])
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))
  const [guestCount, setGuestCount] = useState(0)
  const [occassion, setOccassion] = useState('Birthday')
  const [lastName, setLastName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [guestError, setGuestError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm({ time, date, guests: guestCount, occassion, lastName })
  }

  const getIsFormValid = () => {
    return time && date && guestCount >= 1 && occassion !== '' && lastName
  }

  return (
    <>
      <h2 className="subtitle">Make your reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="res-date">Choose date*</label>
          <input
            type="date"
            value={date}
            data-testid="date-picker"
            onChange={(e) => {
              setDate(e.target.value)
              dispatchDateChange({
                type: 'date_change',
                payload: e.target.value,
              })
            }}
            required={true}
            id="res-date"
          />
        </div>

        <div className="form-control">
          <label htmlFor="res-time">Choose time*</label>
          <div className="time-wrapper">
            {availableTimes.map((t, index) => {
              return (
                <div
                  key={index}
                  data-testid="time-item"
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
          <label htmlFor="guests">Number of guest*</label>
          <div className="number-control">
            <span
              className={`minus ${guestCount < 1 && 'disabled'} `}
              onClick={() => {
                setGuestCount(guestCount - 1)
                setGuestError(guestCount - 1 == 0)
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
              onBlur={() => {
                setGuestError(guestCount == 0)
              }}
            />
            <span
              className={`plus ${guestCount > 19 && 'disabled'} `}
              onClick={() => {
                setGuestCount(guestCount + 1)
                setGuestError(guestCount + 1 == 0)
              }}
            >
              +
            </span>
          </div>
          {guestError && (
            <span className="input-error">
              Number of guests should be at least 1
            </span>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="occasion">Occasion*</label>
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
          <label htmlFor="res-name">Name*</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            onBlur={() => {
              setNameError(lastName.length < 2)
            }}
            required={true}
            minLength={2}
            id="res-name"
          />
          {nameError && (
            <span className="input-error">
              Name must be at least 2 characters long
            </span>
          )}
        </div>

        <div className="form-control">
          <button
            type="submit"
            value="Make Your reservation"
            disabled={!getIsFormValid()}
            aria-label="On Click"
          >
            Make Your reservation
          </button>
        </div>
      </form>
    </>
  )
}

export default BookingForm
