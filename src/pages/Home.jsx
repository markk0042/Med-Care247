import { Link } from 'react-router-dom'
import MarqueeCarousel from '../components/MarqueeCarousel'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>MedCare247</h1>
          <p className="hero-subtitle">Professional Private Ambulance & Events Specialist Services</p>
          <p className="hero-description">
            Available 24/7 for medical transport, event coverage, and emergency medical services. 
            Trusted professionals dedicated to your safety and wellbeing.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Private Ambulance Services</h3>
              <p>Professional medical transport services for emergency and non-emergency medical transfers. Fully equipped ambulances with trained paramedics.</p>
            </div>
            <div className="service-card">
              <h3>Event Medical Coverage</h3>
              <p>Comprehensive medical support for events of all sizes. From small gatherings to large festivals, we ensure your event is covered.</p>
            </div>
            <div className="service-card">
              <h3>24/7 Availability</h3>
              <p>Round-the-clock service availability. We're here when you need us, day or night, ensuring prompt response to all medical transport needs.</p>
            </div>
            <div className="service-card">
              <h3>Qualified Professionals</h3>
              <p>Our team consists of fully qualified paramedics and medical professionals, all registered and experienced in emergency care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose MedCare247?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Reliability</h3>
              <p>Dependable service you can count on, with a proven track record of excellence in medical transport and event coverage.</p>
            </div>
            <div className="feature">
              <h3>Professionalism</h3>
              <p>Highly trained medical professionals committed to providing the highest standard of care and service.</p>
            </div>
            <div className="feature">
              <h3>Modern Equipment</h3>
              <p>State-of-the-art ambulances and medical equipment to ensure the best possible care for our patients.</p>
            </div>
            <div className="feature">
              <h3>Flexible Solutions</h3>
              <p>Tailored services to meet your specific needs, whether for individual transport or large-scale event coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Join our team of dedicated medical professionals</p>
          <Link to="/work-for-us" className="btn btn-primary">View Opportunities</Link>
        </div>
      </section>

      {/* Marquee Carousel Section */}
      <section className="marquee-section">
        <MarqueeCarousel 
          images={[
            '/ambulancejumbo.webp',
            '/zollxdevice.jpeg',
            '/rrv.webp',
            '/backofambulance.webp',
            '/kitbag.jpeg',
            '/award.avif',
            // Add more images/logos here
            // Example: '/logo1.png', '/logo2.png', '/logo3.png'
          ]}
          reverse={true}
        />
      </section>
    </div>
  )
}

export default Home

