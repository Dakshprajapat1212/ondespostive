import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <img
            src={logo}
            alt="Ondes Positive India"
          />

          <p>
            Your trusted travel partner for exploring
            incredible India with luxury, comfort
            and unforgettable experiences.
          </p>

          <div className="social-icons">

            <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer">
              f
            </a>

            <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noreferrer">
              ◎
            </a>

            <a href="https://wa.me/918890420515?text=Hello%2C%20can%20I%20get%20more%20info%20about%20this..%3F" className="whatsapp" target="_blank" rel="noreferrer">
              <svg className="whatsapp-icon" viewBox="0 0 24 24" role="img" aria-label="WhatsApp"><path d="M12 3.2a8.8 8.8 0 0 0-7.58 13.28L3.2 20.8l4.45-1.17A8.8 8.8 0 1 0 12 3.2Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M8.55 8.2c.2-.2.48-.22.7-.06l1.05.8c.2.15.27.43.16.66l-.4.82c.53 1.02 1.36 1.84 2.38 2.37l.82-.4c.23-.11.5-.05.66.16l.8 1.05c.16.22.14.5-.06.7l-.57.57c-.4.4-1 .55-1.54.35a8.48 8.48 0 0 1-4.9-4.9c-.2-.54-.05-1.14.35-1.54l.55-.58Z" fill="currentColor"/></svg>
            </a>

            

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/services">Tour Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/enquiry">Enquiry</Link>

        </div>


        {/* Popular Tours */}
        <div className="footer-column">

          <h4>Popular Tours</h4>

          <Link to="/packages/golden-triangle-tour">Golden Triangle Tour</Link>
          <Link to="/packages/royal-rajasthan-tour">Royal Rajasthan Tour</Link>
          <Link to="/packages/luxury-rajasthan-tour">Luxury Rajasthan Tour</Link>
          <Link to="/packages/desert-safari-tour">Desert Safari Tour</Link>

        </div>


        {/* Destinations */}
        <div className="footer-column">

          <h4>Top Destinations</h4>

          <Link to="/destinations/delhi">Delhi</Link>
          <Link to="/destinations/agra">Agra</Link>
          <Link to="/destinations/jaipur">Jaipur</Link>
          <Link to="/destinations/jodhpur">Jodhpur</Link>
          <Link to="/destinations/udaipur">Udaipur</Link>
          <Link to="/destinations/jaisalmer">Jaisalmer</Link>
          <Link to="/enquiry">Cab Rental</Link>

        </div>


        {/* Contact */}
        <div className="footer-column contact-column">

          <h4>Contact Info</h4>

          <p><a href="tel:+918890420515">☎ &nbsp; +91 88904 20515</a></p>

          <p><a href="tel:+916367168479">☎ &nbsp; +91 63671 68479</a></p>

          <p><a href="mailto:Ondespositiveindiavacation.in@gmail.com">✉ &nbsp; Ondespositiveindiavacation.in@gmail.com</a></p>

          <p>
            📍 &nbsp; 329, Krishi Nagar, Toll Tax,
            Sanganer, Jaipur, Rajasthan - 302033
          </p>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2025 Ondes Positive India Vacation. All Rights Reserved.
        </p>

        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

      </div>


      {/* WhatsApp */}
      <a
        href="https://wa.me/918890420515?text=Hello%2C%20can%20I%20get%20more%20info%20about%20this..%3F"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2a8.8 8.8 0 0 0-7.58 13.28L3.2 20.8l4.45-1.17A8.8 8.8 0 1 0 12 3.2Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M8.55 8.2c.2-.2.48-.22.7-.06l1.05.8c.2.15.27.43.16.66l-.4.82c.53 1.02 1.36 1.84 2.38 2.37l.82-.4c.23-.11.5-.05.66.16l.8 1.05c.16.22.14.5-.06.7l-.57.57c-.4.4-1 .55-1.54.35a8.48 8.48 0 0 1-4.9-4.9c-.2-.54-.05-1.14.35-1.54l.55-.58Z" fill="currentColor"/></svg>
      </a>

    </footer>
  );
}

export default Footer;