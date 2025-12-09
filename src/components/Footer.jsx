import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MedCare247</h3>
            <p>Professional private ambulance and events specialist services for your medical transport and event coverage needs.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/work-for-us">Work For Us</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/staff-zone">Staff Zone</Link></li>
              <li><Link to="/policies">Policies</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@medcare247.co.uk</p>
            <p>Phone: <a href="tel:+447570966727">+44 7570966727</a></p>
            <p>Website: www.medcare247.co.uk</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} MedCare247. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

