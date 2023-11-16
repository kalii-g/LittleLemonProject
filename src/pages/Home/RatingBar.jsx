import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RatingBar = ({ value: ratingValue, items = 5 }) => {
  const ratingValues = Array.from({ length: items }, (_, index) => index + 1)

  return (
    <div className="rating-wrapper" style={{ display: 'flex' }}>
      {ratingValues.map((value) => (
        <FontAwesomeIcon
          key={value}
          icon={value <= ratingValue ? faStarSolid : faStar}
          className="highlight"
        />
      ))}
    </div>
  )
}

export default RatingBar
