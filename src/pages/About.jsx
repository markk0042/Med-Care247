import './About.css'

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About MedCare247</h1>
          <p className="about-intro">
            Leading the way in private ambulance services and event medical coverage across the UK.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At MedCare247, we are dedicated to providing exceptional private ambulance services 
              and comprehensive medical coverage for events. Our mission is to ensure the highest 
              standards of care, professionalism, and reliability in every service we provide.
            </p>
            <p>
              We understand that medical transport and event coverage require precision, expertise, 
              and compassion. That's why we've built a team of highly qualified professionals who 
              are committed to excellence in every aspect of our operations.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Private Ambulance Services</h3>
                <p>
                  We provide professional, reliable ambulance services including frontline ambulance 
                  service, non-emergency medical transfers, hospital-to-hospital transfers, discharge 
                  transport, and planned medical appointments. Our fully equipped ambulances and trained 
                  paramedics ensure safe and comfortable transport.
                </p>
              </div>
              <div className="service-item">
                <h3>Event Medical Coverage</h3>
                <p>
                  From small corporate events to large festivals and sporting events, we provide 
                  comprehensive medical coverage. Our team can assess your event's needs and provide 
                  appropriate medical personnel and equipment to ensure the safety of all attendees.
                </p>
              </div>
              <div className="service-item">
                <h3>24/7 Availability</h3>
                <p>
                  Medical needs don't follow a schedule, and neither do we. Our services are available 
                  around the clock, ensuring that whenever you need professional medical transport or 
                  coverage, we're ready to respond.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Excellence</h3>
                <p>We strive for the highest standards in everything we do, from patient care to customer service.</p>
              </div>
              <div className="value-card">
                <h3>Compassion</h3>
                <p>We treat every patient and client with empathy, respect, and understanding.</p>
              </div>
              <div className="value-card">
                <h3>Reliability</h3>
                <p>You can count on us to be there when you need us, with dependable service every time.</p>
              </div>
              <div className="value-card">
                <h3>Professionalism</h3>
                <p>Our team maintains the highest levels of professionalism in all interactions and services.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of fully qualified paramedics, emergency medical technicians, and 
              support staff who are all registered with the appropriate professional bodies. We invest 
              in continuous training and development to ensure our team stays at the forefront of 
              medical best practices and emergency care techniques.
            </p>
            <p>
              Every member of our team is committed to providing exceptional care and service, 
              whether they're transporting a patient or providing medical coverage at an event. 
              We believe that our people are our greatest asset, and we're proud of the expertise 
              and dedication they bring to MedCare247.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <ul className="why-list">
              <li>Fully qualified and registered medical professionals</li>
              <li>Modern, well-maintained ambulance fleet</li>
              <li>State-of-the-art medical equipment</li>
              <li>Comprehensive insurance coverage</li>
              <li>Proven track record of excellence</li>
              <li>Flexible service options tailored to your needs</li>
              <li>24/7 availability and rapid response times</li>
              <li>Competitive pricing with transparent costs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

