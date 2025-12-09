import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with MedCare247 - We're here to help 24/7</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you need private ambulance services, event medical coverage, or have any 
                questions about our services, we're here to help. Reach out to us through any of 
                the methods below.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div>
                    <h3>Email</h3>
                    <p>info@medcare247.co.uk</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+447570966727">+44 7570966727</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h3>Website</h3>
                    <p>www.medcare247.co.uk</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h3>Operating Hours</h3>
                    <p>24 hours a day, 7 days a week</p>
                    <p>365 days a year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <h3>Thank you for your message!</h3>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="general-enquiry">General Enquiry</option>
                      <option value="submit-feedback">Submit Feedback</option>
                      <option value="training">Training</option>
                      <option value="recruitment">Recruitment</option>
                      <option value="book-ambulance">Book an ambulance</option>
                      <option value="events-medical-cover">Events Medical Cover</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

