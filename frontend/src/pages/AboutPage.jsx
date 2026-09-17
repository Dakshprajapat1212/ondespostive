import { Link } from "react-router-dom";
import udaipur from "../assets/Udaipur.png";
import jaisalmer from "../assets/Jaisalmer.png";
import jodhpur from "../assets/Jodhpur.png";
import agra from "../assets/Agra.png";
import "./AboutPage.css";
import anujYadav from "../assets/AnujYadav.jpeg"
import SitaramYadav from "../assets/SitaramYadav.png"

const values = [
  ["Location Expertise", "In-depth knowledge of destinations and hidden experiences."],
  ["Personalized Tours", "Custom itineraries created around your preferences."],
  ["24/7 Assistance", "We are with you at every step of your journey."],
  ["Trusted & Reliable", "Committed to safety, quality and customer satisfaction."],
];

const promises = [
  ["Experienced Team", "Professional, friendly and experienced travel experts."],
  ["Handpicked Experiences", "Carefully selected stays, activities and local experiences."],
  ["Transparent Pricing", "No hidden charges. Honest pricing and complete value."],
  ["Comfortable Transport", "Well-maintained vehicles for a safe and pleasant journey."],
  ["24/7 Support", "We are always available before, during and after your trip."],
  ["Customer First", "Your happiness and comfort remain our first priority."],
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro about-band">
        <div className="about-intro-copy">
          <span className="about-kicker">ONDES POSITIVE INDIA VACATION</span>
          <h1>About<br /><em>Ondes Positive</em></h1>
          <p>Thoughtful India journeys, planned with local knowledge and genuine care.</p>
        </div>
        <img src={udaipur} alt="Udaipur palace and lake" />
      </section>

      <section className="about-partner about-band">
        <div className="about-copy">
          <span className="about-kicker">WHO WE ARE</span>
          <h2>Your Travel Partner<br />Across Incredible India</h2>
          <p>Ondes Positive India Vacation is a Jaipur-based travel company dedicated to curating authentic, comfortable and memorable journeys across India.</p>
          <p>We specialize in personalized tours, reliable taxi services, handpicked hotels and complete travel solutions for families, couples and solo travellers.</p>
        </div>
        <div className="value-grid">
          {values.map(([title, text]) => <div className="value-item" key={title}><span className="about-icon">✦</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </section>

      <section className="about-story about-band">
        <div><span className="about-kicker">OUR STORY</span><h2>Travel Is Our Passion</h2><p>Our journey started with a simple belief: travel should be meaningful, well-planned and hassle-free.</p><p>With a passion for exploring India and years of experience in travel, we create journeys that connect you with India's culture, heritage and people.</p></div>
        <div className="story-services"><h3>Our Services</h3><p>● Customized India Tours</p><p>● Rajasthan Tours</p><p>● Golden Triangle Tours</p><p>●  Cab Rental Services</p></div>
        <div className="story-images"><img src={agra} alt="Taj Mahal" /><img src={jaisalmer} alt="Jaisalmer desert" /><img src={jodhpur} alt="Jodhpur fort" /></div>
      </section>

      <section className="promise-section about-band"><span className="about-kicker">WHY TRAVEL WITH US</span><h2>Travel With Confidence</h2><div className="promise-grid">{promises.map(([title, text]) => <div className="promise-item" key={title}><span className="about-icon">✦</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="mission-band about-band"><div><span className="about-icon">◎</span><b>Our Mission</b><p>To create authentic, comfortable and enriching travel experiences that connect people with the real India.</p></div><div><span className="about-icon">◉</span><b>Our Vision</b><p>To be a trusted travel brand known for personalized service, responsible tourism and unforgettable journeys.</p></div></section>

      <section className="owner-card about-band"><img className="profile-photo" src={SitaramYadav} alt="Owner placeholder" /><div><span className="about-kicker">FOUNDER</span><h2>Mr. Sitaram Yadav</h2><h3>Founder & Travel Consultant</h3><p>A travel enthusiast and India travel expert who believes every journey should feel personal, comfortable and authentic.</p></div><ul><li>Extensive knowledge of Indian destinations</li><li>Personalized travel planning</li><li>Multilingual support</li><li>Committed to customer satisfaction</li></ul></section>

      <section className="language-expert about-band"><img className="profile-photo" src={anujYadav} alt="Mr. Anuj Yadav" /><div><span className="about-kicker">FRENCH LANGUAGE EXPERT</span><h2>Mr. Anuj Yadav</h2><h3>French Translator & Guest Support Specialist</h3><p>Our French language expert makes every conversation easy for French-speaking travellers. From planning and arrival to local guidance, Anuj helps guests feel comfortable, understood and welcomed throughout their India journey.</p><div className="certification"><span className="about-icon">✓</span><div><b>Certified in French</b><small>Alliance Française Pondicherry</small></div></div></div><ul><li>Easy French communication</li><li>French-friendly travel guidance</li><li>Clear help before and during tours</li><li>Warm support for international guests</li></ul></section>

      <section className="about-cta about-band"><span className="about-icon">▣</span><div><h2>Plan Your India Journey With Us</h2><p>Whether it is a family vacation, romantic getaway or adventure trip, we are here to make it unforgettable.</p></div><Link to="/contact">Contact Us →</Link></section>
    </main>
  );
}

export default AboutPage;
