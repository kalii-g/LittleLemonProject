import { Link } from 'react-router-dom'
import greekSalad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg'
import lemonDessert from '../../assets/images/lemon-dessert.jpg'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Specials.css'

const Specials = () => {
  return (
    <section className="specials">
      <div class="heading">
        <h2>This week's specials!</h2>
        <Link to="/" className="btn">
          Our Menu
        </Link>
      </div>
      <div className="menuWrapper">
        <article>
          <img src={greekSalad} />
          <div className="description">
            <div className="heading">
              <h4>Greek salad</h4>
              <span>12.80$</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{' '}
            </p>
            <Link to="/">
              Order for delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </div>
        </article>
        <article>
          <img src={bruchetta} />
          <div className="description">
            <div className="heading">
              <h4>Bruchetta</h4>
              <span>10.80$</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.{' '}
            </p>
            <Link to="/">
              Order for delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </div>
        </article>
        <article>
          <img src={lemonDessert} />
          <div className="description">
            <div className="heading">
              <h4>Lemon dessert</h4>
              <span>8.80$</span>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <Link to="/">
              Order for delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Specials
