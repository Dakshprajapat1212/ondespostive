import { Link } from "react-router-dom";
import "./WhyChooseUs.css";
import Crysta from "../../assets/Crysta.png"
import Hycross from "../../assets/Highcross.png"
import Ertiga from "../../assets/Ertiga.png"
import Etios from "../../assets/Etios.png"
import TempoTraveller from "../../assets/TempoTraveller.png"
import LuxuryCars from "../../assets/LuxuryCars.png"
const features = [
  {
    icon: "♙",
    title: "Tailor Made Tours",
    text: "Itineraries designed around your interests",
  },
  {
    icon: "♟",
    title: "Expert Local Team",
    text: "Professional guides and local experts",
  },
  {
    icon: "♛",
    title: "Luxury & Comfort",
    text: "Handpicked hotels and premium transport",
  },
  {
    icon: "♺",
    title: "24x7 Assistance",
    text: "We are with you before, during & after",
  },
  {
    icon: "♢",
    title: "No Hidden Costs",
    text: "Transparent pricing with no surprises",
  },
  {
    icon: "♧",
    title: "Happy Travelers",
    text: "Thousands of happy clients from France",
  },
];

const vehicles = [
  {
    slug: "toyota-ertiga",
    image: Ertiga,
    title: "Maruti Suzuki Ertiga (7 Seater)",
  },
  
  {
    slug: "toyota-etios",
    image: Etios,
    title: "Toyota Etios (5 Seater)",
  },

  {
    slug: "toyota-innova-crysta",
    image: Crysta,
    title: "Innova Crysta (7 Seater)",
  },
  
  {
    slug: "innova-hycross",
    image: Hycross,
    title: "Innova Hycross (7 Seater)",
  },

 
  {
    slug: "tempo-traveller",
    image: TempoTraveller,
    title: "Tempo Traveller (12 Seater)",
  },
  {
    slug: "luxury-car",
    image: LuxuryCars,
    title: "Luxury Cars",
  },
  
];

function WhyChooseUs() {
  return (
    <section className="travel-section">

      {/* ================= WHY CHOOSE US ================= */}
      <div className="why-section">

        <p className="small-heading">WHY CHOOSE US</p>

        <h2 className="main-heading">
          Travel With <span>Confidence</span>
        </h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}

        </div>

      </div>


      {/* ================= VEHICLES ================= */}
      <div className="vehicle-section">

        <div className="vehicle-header">

          <div>
            <p className="small-heading">
              COMFORTABLE & SAFE
            </p>

            <h2 className="vehicle-heading">
              Taxi & Cab Services
            </h2>
          </div>
          
        </div>


        <div className="vehicle-grid">

          {vehicles.map((vehicle, index) => (
            <Link className="vehicle-card" key={index} to={`/services/${vehicle.slug}`}>

              <div className="vehicle-image">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                />
              </div>

              <h3>{vehicle.title}</h3>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;