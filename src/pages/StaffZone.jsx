import { useState } from 'react'
import './StaffZone.css'

function StaffZone() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would authenticate with a server
    console.log('Login attempt:', loginData)
    // For demo purposes, we'll just set logged in to true
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginData({ username: '', password: '' })
  }

  return (
    <div className="staff-zone">
      <section className="staff-hero">
        <div className="container">
          <h1>Staff Zone</h1>
          <p>Access your training resources and professional development tools</p>
        </div>
      </section>

      <section className="staff-content">
        <div className="container">
          {/* Coming Soon Features Card with Image */}
          <div className="coming-soon-card-layout">
            <div className="coming-soon-content">
              {isLoggedIn && (
                <div className="dashboard-header">
                  <h2>Welcome to Staff Zone</h2>
                  <button onClick={handleLogout} className="btn btn-secondary">
                    Logout
                  </button>
                </div>
              )}
              <h3>Coming Soon</h3>
              <div className="coming-soon-features-list">
                <div className="coming-soon-feature-item">
                  <h4>CPD Builder App</h4>
                  <p>For Students and Staff - Build and track your Continuing Professional Development</p>
                </div>

                <div className="coming-soon-feature-item">
                  <h4>Multiple Choice Question Tests</h4>
                  <p>Practice and test your knowledge with interactive multiple choice questions</p>
                </div>

                <div className="coming-soon-feature-item">
                  <h4>ECG Learning</h4>
                  <p>Comprehensive ECG interpretation training and learning resources</p>
                </div>

                <div className="coming-soon-feature-item">
                  <h4>Anatomy and Physiology</h4>
                  <p>Interactive learning modules for anatomy and physiology education</p>
                </div>
              </div>
            </div>

            <div className="coming-soon-image-section">
              <img 
                src="/mobile1.png" 
                alt="Mobile app" 
                className="coming-soon-image"
              />
            </div>
          </div>

          {/* Login Form - At the Bottom */}
          <div className="login-section">
            <div className="login-card">
              <h2>Login</h2>
              <p>Please enter your credentials to access the Staff Zone</p>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                    placeholder="Enter your username"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StaffZone

