import { Link } from 'react-router-dom'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MealCard.css'

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <img src={meal.image} alt={meal.name} />
      <div className="description">
        <div className="heading">
          <h4>{meal.name}</h4>
          <span>{meal.price}</span>
        </div>
        <p>{meal.description}</p>
        <Link to="/">
          Order for delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  )
}

export default MealCard
