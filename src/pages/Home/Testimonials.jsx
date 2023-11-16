import './Testimonials.css'
import person from '../../assets/images/person.jpg'
import RatingBar from './RatingBar'

const testimonials = [
  {
    userImg: person,
    rating: 4,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,.',
  },
  {
    userImg: person,
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    userImg: person,
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .',
  },
  {
    userImg: person,
    rating: 3,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials container">
      <h2>Testimonials</h2>
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) => (
          <article key={index} className="testimonial-card">
            <div className="profile-img">
              <img src={testimonial.userImg} />
            </div>
            <RatingBar value={testimonial.rating} />
            <p>{testimonial.comment}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
