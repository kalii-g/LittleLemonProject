import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
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
            <Link to="/Book">Book now</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
