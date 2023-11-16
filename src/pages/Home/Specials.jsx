import { Link } from 'react-router-dom'
import greekSalad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg'
import lemonDessert from '../../assets/images/lemon-dessert.jpg'
import MealCard from './MealCard'
import './Specials.css'

const meals = [
  {
    name: 'Greek salad',
    price: '12.80$',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
  },
  {
    name: 'Bruchetta',
    price: '11.80$',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruchetta,
  },
  {
    name: 'Lemon dessert',
    price: '8.80$',
    description:
      'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemonDessert,
  },
]
const Specials = () => {
  return (
    <section className="specials container">
      <div className="heading">
        <h2>This week's specials!</h2>
        <Link to="/" className="btn">
          Our Menu
        </Link>
      </div>
      <div className="menu-wrapper">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  )
}
export default Specials
