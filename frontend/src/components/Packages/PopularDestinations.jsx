import "./PopularDestinations.css";
import { API_BASE } from "../../config/api";
import delhi from "../../assets/Delhi.png";
import udaipur from "../../assets/Udaipur.png";
import jaisalmer from "../../assets/Jaisalmer.png";
import jodhpur from "../../assets/Jodhpur.png";
import jaipur from "../../assets/Jaipur.png";
import agra from "../../assets/Agra.png";
import goldenTriangle from "../../assets/GoldenTriangle.png"
import royalRajasthan from "../../assets/RoyalRajasthan.png"
import luxuaryRajasthan from "../../assets/LuxuaryRajasthan.png"
import desertSafari from "../../assets/DesertSafari.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = { delhi, agra, jaipur, jodhpur, udaipur, jaisalmer, goldenTriangle, royalRajasthan, luxuaryRajasthan, desertSafari };

const fallbackDestinations = [
  { name: "Delhi", subtitle: "The Heart of India", duration: "2 Nights / 3 Days", description: "Discover lively markets, grand monuments and the rich culture of India's capital.", imageKey: "delhi" },
  { name: "Agra", subtitle: "Home of Taj Mahal", duration: "1 Night / 2 Days", description: "Experience the Taj Mahal, Agra Fort and the timeless heritage of the Mughal era.", imageKey: "agra" },
  { name: "Jaipur", subtitle: "The Pink City", duration: "2 Nights / 3 Days", description: "Explore royal forts, elegant palaces and colourful bazaars in Rajasthan's capital.", imageKey: "jaipur" },
  { name: "Jodhpur", subtitle: "The Blue City", duration: "2 Nights / 3 Days", description: "See mighty Mehrangarh Fort and wander through the famous blue lanes of Jodhpur.", imageKey: "jodhpur" },
  { name: "Udaipur", subtitle: "City of Lakes", duration: "2 Nights / 3 Days", description: "Enjoy lakeside palaces, beautiful sunsets and the romance of the Aravalli hills.", imageKey: "udaipur" },
  { name: "Jaisalmer", subtitle: "Golden City", duration: "2 Nights / 3 Days", description: "Ride across the Thar Desert, visit the golden fort and enjoy a desert sunset.", imageKey: "jaisalmer" },
];

const fallbackPackages = [
  { name: "Golden Triangle Tour", places: "Delhi - Agra - Jaipur", duration: "6 Days / 5 Nights", feature: "Automobile", description: "A classic India journey combining Delhi's heritage, Agra's Taj Mahal and Jaipur's royal charm.", imageKey: "goldenTriangle", popular: true },
  { name: "Royal Rajasthan Tour", places: "Jaipur - Jodhpur - Jaisalmer - Udaipur", duration: "8 Days / 7 Nights", feature: "Customisable", description: "Travel through grand forts, colourful cities, desert landscapes and lakeside palaces.", imageKey: "royalRajasthan" },
  { name: "Luxury Rajasthan Tour", places: "Jaipur - Udaipur - Jodhpur - Jaisalmer", duration: "10 Days / 9 Nights", feature: "Luxury Hotels", description: "A refined escape with premium stays, private transfers and carefully paced experiences.", imageKey: "luxuaryRajasthan" },
  { name: "Desert Safari Tour", places: "Jaisalmer - Bikaner - Camel Safari", duration: "6 Days / 5 Nights", feature: "Adventure", description: "Meet the desert with dunes, folk music, camel rides and peaceful nights under the stars.", imageKey: "desertSafari" },
];

const withImages = (items) => items.map((item) => ({ ...item, image: images[item.imageKey] }));

function PopularDestinations() {
  const [destinations, setDestinations] = useState(withImages(fallbackDestinations));
  const [packages, setPackages] = useState(withImages(fallbackPackages));
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/content`)
      .then((response) => {
        if (!response.ok) throw new Error("Content could not be loaded");
        return response.json();
      })
      .then((content) => {
        setDestinations(withImages(content.destinations.map((item) => ({ ...item, description: item.description || fallbackDestinations.find((fallback) => fallback.name === item.name)?.description }))));
        setPackages(withImages(content.packages.map((item) => ({ ...item, description: item.description || fallbackPackages.find((fallback) => fallback.name === item.name)?.description }))));
      })
      .catch(() => setError(""));
  }, []);

  return (
    <section className="destination-section">
      {/* DESTINATIONS */}

      <div className="section-heading">
        <div>
          <span className="small-heading">EXPLORE INCREDIBLE INDIA</span>
          <h2>Popular Destinations</h2>
        </div>

      </div>

      {error && <p>{error}</p>}
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <Link className="destination-card" key={index} to={`/destinations/${destination.name.toLowerCase()}`}>
            <div className="destination-image">
              <img src={destination.image} alt={destination.name} />
            </div>

            <div className="destination-content">
              <h3>{destination.name}</h3>

              <p className="destination-subtitle">{destination.subtitle}</p>

              <p className="destination-duration">{destination.duration}</p>

              <div className="destination-bottom">
                <span className="round-btn">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* PACKAGES */}

      <div className="section-heading packages-heading">
        <div>
          <span className="small-heading">HANDPICKED FOR YOU</span>
          <h2>Our Best Selling Packages</h2>
        </div>

      </div>

      <div className="package-grid">
        {packages.map((pkg, index) => (
          <Link className="package-card" key={index} to={`/packages/${pkg.name.toLowerCase().replaceAll(" ", "-")}`}>
            <div className="package-image">
              {pkg.popular && (
                <span className="popular-badge">Most Popular</span>
              )}

              <img src={pkg.image} alt={pkg.name} />
            </div>

            <div className="package-content">
              <h3>{pkg.name}</h3>

              <p className="package-places">{pkg.places}</p>

              <div className="package-info">
                <span>▣ &nbsp;{pkg.duration}</span>
                <span>▣ &nbsp;{pkg.feature}</span>
              </div>

              <div className="package-bottom">
                <span className="details-btn">View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
