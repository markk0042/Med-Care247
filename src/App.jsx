import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WorkForUs from './pages/WorkForUs'
import Training from './pages/Training'
import StaffZone from './pages/StaffZone'
import Policies from './pages/Policies'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work-for-us" element={<WorkForUs />} />
            <Route path="/training" element={<Training />} />
            <Route path="/staff-zone" element={<StaffZone />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

