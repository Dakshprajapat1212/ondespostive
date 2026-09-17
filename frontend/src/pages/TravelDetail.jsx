import { Link, useParams } from "react-router-dom";
import { allTravelItems } from "../data/travelData";
import "./TravelDetail.css";

function TravelDetail() {
  const { slug } = useParams();
  const item = allTravelItems.find((travelItem) => travelItem.slug === slug);

  if (!item) {
    return <main className="detail-page"><h1>Tour not found</h1><Link to="/">Return home</Link></main>;
  }

  return (
    <main className="detail-page">
      <div className="detail-visual"><img src={item.image} alt={item.name} /></div>
      <article className="detail-copy">
        <span className="detail-kicker">ONDES POSITIVE INDIA VACATION</span>
        <h1>{item.name}</h1>
        <p className="detail-lead">{item.description}</p>
        <div className="detail-facts">
          {item.duration && <span><b>Duration</b>{item.duration}</span>}
          {item.places && <span><b>Route</b>{item.places}</span>}
          {item.seats && <span><b>Capacity</b>{item.seats}</span>}
          <span><b>Service</b>{item.feature}</span>
        </div>
        <Link className="detail-cta" to="/enquiry">Plan this journey</Link>
      </article>
    </main>
  );
}

export default TravelDetail;
