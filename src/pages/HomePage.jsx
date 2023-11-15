import AboutSection from '../components/homepageSections/AboutSection'
import Hero from '../components/homepageSections/Hero'
import Specials from '../components/homepageSections/Specials'
import Testimonials from '../components/homepageSections/Testimonials'

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Specials />
        <Testimonials />
        <AboutSection />
      </div>
    </>
  )
}

export default HomePage
