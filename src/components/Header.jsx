import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className="container">
      <Link to="/" className="logo">
        <img src={logo} alt="Little lemon logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/Book">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
