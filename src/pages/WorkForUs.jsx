import { Link } from 'react-router-dom'
import './WorkForUs.css'

function WorkForUs() {
  return (
    <div className="work-for-us">
      <section className="work-hero">
        <div className="container">
          <h1>Work For Us</h1>
          <p>Join the MedCare247 team and make a difference</p>
        </div>
      </section>

      <section className="work-content">
        <div className="container">
          <div className="intro-section">
            <h2>Why Work With MedCare247?</h2>
            <p>
              At MedCare247, we're always looking for dedicated, professional individuals to join 
              our team. Whether you're a qualified paramedic, emergency medical technician, or 
              looking to start a career in medical services, we offer rewarding opportunities 
              with competitive benefits and a supportive work environment.
            </p>
          </div>

          <div className="benefits-section">
            <h2>What We Offer</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Competitive Salary</h3>
                <p>Attractive remuneration packages that reflect your skills and experience</p>
              </div>
              <div className="benefit-card">
                <h3>Training & Development</h3>
                <p>Ongoing professional development and training opportunities to advance your career</p>
              </div>
              <div className="benefit-card">
                <h3>Modern Fleet</h3>
                <p>Work with state-of-the-art ambulances and medical equipment</p>
              </div>
              <div className="benefit-card">
                <h3>Supportive Team</h3>
                <p>Join a collaborative team of professionals who support each other</p>
              </div>
            </div>
          </div>

          <div className="positions-section">
            <h2>Current Opportunities</h2>
            <div className="positions-list">
              <div className="position-card">
                <h3>Qualified Paramedic / Newly Qualified Paramedic (NQP)</h3>
                <p className="position-type">Full-time / Part-time</p>
                <p className="position-salary">£27.50 - £30 per hour</p>
                <p>
                  We're seeking experienced, HCPC-registered paramedics to join our team. 
                  You'll be responsible for providing high-quality patient care during transport 
                  and at events.
                </p>
                <ul className="requirements">
                  <li>HCPC registration</li>
                  <li>Valid driving license (C1 category preferred)</li>
                  <li>LCERAD Blue Light Driving Qualifications</li>
                  <li>Minimum 2 years post-qualification experience</li>
                  <li>Excellent communication skills</li>
                </ul>
              </div>

              <div className="position-card">
                <h3>Ambulance Associate Practitioner (AAP)</h3>
                <p className="position-type">Full-time / Part-time</p>
                <p className="position-salary">£18 - £21 per hour</p>
                <p>
                  Join our team as an Ambulance Associate Practitioner (AAP) and support our paramedics in delivering exceptional 
                  patient care. Ideal for those looking to gain experience in private ambulance services.
                </p>
                <ul className="requirements">
                  <li>Valid Ambulance Associate Practitioner (AAP) qualification</li>
                  <li>Valid driving license</li>
                  <li>LCERAD Blue Light Driving Qualifications</li>
                  <li>Strong teamwork skills</li>
                  <li>Commitment to professional development</li>
                </ul>
              </div>

              <div className="position-card">
                <h3>Event Medical Coordinator</h3>
                <p className="position-type">Full-time / Contract</p>
                <p className="position-salary">£23 per hour</p>
                <p>
                  Coordinate medical coverage for events of all sizes. This role involves planning, 
                  organizing, and managing medical teams at various events.
                </p>
                <ul className="requirements">
                  <li>Experience in event management or medical coordination</li>
                  <li>LCERAD Blue Light Driving Qualifications</li>
                  <li>Strong organizational skills</li>
                  <li>Excellent communication abilities</li>
                  <li>Ability to work under pressure</li>
                </ul>
              </div>

              <div className="position-card">
                <h3>Ambulance Care Assistant</h3>
                <p className="position-type">Full-time / Part-time</p>
                <p className="position-salary">£14 - £15.50 per hour</p>
                <p>
                  Support our medical teams by assisting with patient care, vehicle maintenance, 
                  and operational tasks. Great entry-level position for those interested in a 
                  career in medical services.
                </p>
                <ul className="requirements">
                  <li>Willingness to learn and develop</li>
                  <li>Good physical fitness</li>
                  <li>Compassionate and caring nature</li>
                  <li>Valid driving license</li>
                  <li>LCERAD Blue Light Driving Qualifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="application-section">
            <h2>How to Apply</h2>
            <p>
              Interested in joining our team? We'd love to hear from you! Please get in touch 
              with us through the contact form below, or send your CV and cover letter to our 
              recruitment team.
            </p>
            <div className="application-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Send Your Application</h3>
                <p>Submit your CV and cover letter via our contact form or email</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Initial Review</h3>
                <p>Our team will review your application and qualifications</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Interview Process</h3>
                <p>If selected, we'll invite you for an interview and assessment</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Join Our Team</h3>
                <p>Successful candidates will receive an offer and start their journey with us</p>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkForUs

