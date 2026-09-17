import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/Hero.jpeg"; // apni image yaha laga dena

function Hero({ initialTour = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: initialTour,
    date: "",
    travelers: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Field change hote hi uska error remove
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can contain letters only";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // Tour
    if (!formData.tour) {
      newErrors.tour = "Please select a tour";
    }

    // Date
    if (!formData.date) {
      newErrors.date = "Please select your travel date";
    }

    // Travelers
    if (!formData.travelers) {
      newErrors.travelers = "Please select number of travelers";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Enquiry could not be sent");

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", tour: initialTour, date: "", travelers: "" });
    } catch {
      setSubmitError("Unable to send your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Aaj ki date
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="enquiry"
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-small-text">
            Welcome to Ondes Positive India Vacation
          </p>

          <h1>
            Experience <span>India</span>
            <br />
            Like Never Before
          </h1>

          <p className="hero-description">
            Luxury tours across Rajasthan, Golden Triangle and Incredible
            India crafted especially for French & International Travelers.
          </p>

          <div className="hero-buttons">
            <Link to="/packages" className="explore-btn">
              Explore Tours
            </Link>

          </div>

        </div>


        {/* RIGHT FORM */}
        <div className="enquiry-card">

          <div className="form-heading">
            <h2>Plan Your Journey</h2>
            <p>Get a free customized itinerary</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            {/* NAME */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && (
                <small className="error-message">
                  {errors.name}
                </small>
              )}
            </div>


            {/* EMAIL */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <small className="error-message">
                  {errors.email}
                </small>
              )}
            </div>


            {/* PHONE */}
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                maxLength="10"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  setFormData((prev) => ({
                    ...prev,
                    phone: value,
                  }));

                  setErrors((prev) => ({
                    ...prev,
                    phone: "",
                  }));
                }}
                className={errors.phone ? "input-error" : ""}
              />

              {errors.phone && (
                <small className="error-message">
                  {errors.phone}
                </small>
              )}
            </div>


            {/* TOUR */}
            <div className="form-group">
              <select
                name="tour"
                value={formData.tour}
                onChange={handleChange}
                className={errors.tour ? "input-error" : ""}
              >
                <option value="">Select Tour</option>
                <option value="Rajasthan Tour">
                  Rajasthan Tour
                </option>
                <option value="Golden Triangle">
                  Golden Triangle
                </option>
                <option value="Udaipur Tour">
                  Udaipur Tour
                </option>
                <option value="Jaipur Tour">
                  Jaipur Tour
                </option>
                <option value="Jodhpur Tour">
                  Jodhpur Tour
                </option>
                <option value="Cab Rental">
                  Cab Rental
                </option>
              </select>

              {errors.tour && (
                <small className="error-message">
                  {errors.tour}
                </small>
              )}
            </div>


            {/* DATE */}
            <div className="form-group">
              <input
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                className={errors.date ? "input-error" : ""}
              />

              {errors.date && (
                <small className="error-message">
                  {errors.date}
                </small>
              )}
            </div>


            {/* TRAVELERS */}
            <div className="form-group">
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className={errors.travelers ? "input-error" : ""}
              >
                <option value="">No. of Travelers</option>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3-5">3 - 5 Travelers</option>
                <option value="6-10">6 - 10 Travelers</option>
                <option value="10+">10+ Travelers</option>
              </select>

              {errors.travelers && (
                <small className="error-message">
                  {errors.travelers}
                </small>
              )}
            </div>


            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>


            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your enquiry has been received.
              </div>
            )}

            {submitError && <div className="error-message">{submitError}</div>}

          </form>

        </div>

        

      </div>


      {/* FEATURES BAR */}
<div className="features-bar">

  <div className="feature-item">
    <div className="feature-icon">♡</div>
    <div>
      <h4>Best Price</h4>
      <p>Guaranteed</p>
    </div>
  </div>

  <div className="feature-item">
    <div className="feature-icon">◷</div>
    <div>
      <h4>24x7 Support</h4>
      <p>We are here</p>
    </div>
  </div>

  <div className="feature-item">
    <div className="feature-icon">♢</div>
    <div>
      <h4>Luxury Travel</h4>
      <p>Comfort & Safety</p>
    </div>
  </div>

  <div className="feature-item">
    <div className="feature-icon">♧</div>
    <div>
      <h4>Expert Guides</h4>
      <p>French Friendly</p>
    </div>
  </div>

  <div className="feature-item">
    <div className="feature-icon">♧</div>
    <div>
      <h4>Custom Tours</h4>
      <p>Just for You</p>
    </div>
  </div>

  <div className="feature-item">
    <div className="feature-icon">♢</div>
    <div>
      <h4>Trusted Company</h4>
      <p>5+ Years</p>
    </div>
  </div>

</div>

      
    </section>
  );
}

export default Hero;