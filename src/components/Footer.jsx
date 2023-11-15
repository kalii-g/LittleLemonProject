import './Footer.css'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="container">
        <li>
          <img src={logo} />
        </li>
        <li>
          <h4>Menu</h4>

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
        </li>
        <li>
          <h4>Contacts</h4>

          <ul>
            <li>Address: Chicago, IL</li>
            <li>Phone: +48555245500</li>
            <li>Email: contacts@littlelemon.com</li>
          </ul>
        </li>

        <li>
          <h4>Social media</h4>
          <ul className="social">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Footer
