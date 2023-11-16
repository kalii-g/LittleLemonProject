import './Hero.css'
import hero from '../../assets/images/hero.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            A family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. A family owned Mediterranean
            restaurant, focused on traditional recipes served with a modern
            twist.
          </p>
          <Link to="/Book" className="btn">
            Book a table
          </Link>
        </div>
        <div className="img-wrapper">
          <img src={hero} />
        </div>
      </div>
    </section>
  )
}

export default Hero
