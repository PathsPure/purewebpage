import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Contact from './components/Contact';
import appPreviewImage from './images/purepathgraph.png';
import leoriiseImage from './images/leoriise.png';
import lookingatphoneImage from './images/lookingatphone.jpeg';
import pthsImage from './images/pths.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <header className="hero-section">
                <h1>Dedicated to Enhancing Workplaces</h1>
                <p className="hero-subtitle">
                  Our AI-powered solutions support businesses of all sizes in creating environments 
                  that prioritize employee well-being and engagement.
                </p>
                <div className="hero-image">
                  <img src={pthsImage} alt="Pure Paths Solutions" />
                </div>
              </header>

              <section className="features-grid">
                <div className="feature-card">
                  <span className="feature-icon">💡</span>
                  <h3>Employee Engagement</h3>
                  <p>Transform your workplace with our AI-driven solutions that enhance employee satisfaction and well-being.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🤝</span>
                  <h3>Continuous Support</h3>
                  <p>Benefit from ongoing AI support that adapts to your team's needs and fosters a positive work environment.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">📱</span>
                  <h3>Innovative App Access</h3>
                  <p>Our app enables employees to document weekly reflections, fostering connection and motivation in real-time.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🎯</span>
                  <h3>Personalized Consulting</h3>
                  <p>Receive tailored advice to integrate our solutions effectively and improve your workplace dynamics.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">📊</span>
                  <h3>Get Live Reports</h3>
                  <p>We have gathered all the information from the employees so we can create super detailed reports, so owners can get live insights and take immediate action!</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🔄</span>
                  <h3>Compatible with any organization</h3>
                  <p>Big or small, our app is designed to work seamlessly with organizations of all sizes. Contact us to discuss your organization, and we'll offer you a customized deal!</p>
                </div>
              </section>

              <section className="app-preview">
                <div className="app-content">
                  <h2>Pure Paths App</h2>
                  <ul>
                    <li>Reflect on your work experiences.</li>
                    <li>Track your personal growth and insights.</li>
                    <li>Discover a new way to enhance your work life.</li>
                  </ul>
                </div>
                <div className="app-image">
                  <img src={lookingatphoneImage} alt="Pure Paths App Preview" />
                </div>
              </section>

              <section className="testimonial">
                <div className="testimonial-content">
                  <blockquote>
                    "Pure Paths has saved us from thousands of layoffs and has unlocked insights we never thought possible"
                  </blockquote>
                  <div className="testimonial-author-large">
                    <img 
                      src={leoriiseImage} 
                      alt="Leo Riise Aasheim" 
                      className="author-image-large" 
                    />
                    <div className="author-details">
                      <h4>Leo Riise Aasheim</h4>
                      <p>Founder and CEO</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="cta-section">
                <h2>Join Leading Enterprises in Enhancing Workplace Satisfaction</h2>
                <p>Contact Us to Discover How Pure Paths Can Transform Your Organization</p>
                <Link to="/contact" className="cta-button">Contact Us</Link>
              </section>

              <footer className="site-footer">
                <div className="footer-content">
                  <div className="footer-brand">
                    <h3>Pure Paths</h3>
                    <p>AI-driven solutions that enhance workplace well-being by fostering employee engagement 
                       and addressing concerns, helping companies create a more positive and productive work environment</p>
                  </div>
                  <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>Privacy</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className="footer-social">
                    <h4>Social</h4>
                    <ul>
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>Twitter/X</li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
