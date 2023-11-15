import './Testimonials.css'
import person from '../../assets/images/person.jpg'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <ul>
        <li>
          <div className="profileImg">
            <img src={person} />
          </div>
          <span>*****</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
        <li>
          <div className="profileImg">
            <img src={person} />
          </div>
          <span>*****</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <div className="profileImg">
            <img src={person} />
          </div>
          <span>*****</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </li>
        <li>
          <div className="profileImg">
            <img src={person} />
          </div>
          <span>*****</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Testimonials
