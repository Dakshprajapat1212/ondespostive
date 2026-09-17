import { Link } from "react-router-dom";
import { vehicles } from "../data/travelData";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">
      <header className="page-heading"><span>PRIVATE TRANSPORT</span><h1>Comfortable rides across India</h1><p>Choose the right vehicle for your family, couple or group journey.</p></header>
      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <Link className="vehicle-card" to={`/services/${vehicle.slug}`} key={vehicle.slug}>
            <img src={vehicle.image} alt={vehicle.name} />
            <div><span>{vehicle.feature}</span><h2>{vehicle.name}</h2><p>{vehicle.seats}</p><b>View vehicle details →</b></div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Services;
