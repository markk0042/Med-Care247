import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo />
          <span className="logo-text">MedCare247</span>
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/work-for-us" 
              className={isActive('/work-for-us') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Work For Us
            </Link>
          </li>
          <li>
            <Link 
              to="/training" 
              className={isActive('/training') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
          </li>
          <li>
            <Link 
              to="/staff-zone" 
              className={isActive('/staff-zone') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Staff Zone
            </Link>
          </li>
          <li>
            <Link 
              to="/policies" 
              className={isActive('/policies') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Policies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

