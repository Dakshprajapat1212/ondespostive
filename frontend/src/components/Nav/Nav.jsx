import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <>
 <div className="info">
        <div className="info-left">
          <span>Discover the soul of India with luxury & memorable journeys</span>
        </div>

        <div className="info-right">
          <a href="mailto:Ondespositiveindiavacation.in@gmail.com">✉ Ondespositiveindiavacation.in@gmail.com</a>
          <a href="tel:+918890420515">☎ +91 88904 20515</a>
          <span>▣ English, Hindi, & French</span>
        </div>
      </div>
    <nav className="navbar">
      
      <Link to="/" className="brand">
        <img src={logo} alt="Ondes Positive India Vacation" />

        <div className="brand-text">
          <span className="brand-name">Ondes Positive</span>
          <small>INDIA VACATION</small>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/services">Taxi Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
    </>
  );
}

export default Navbar;