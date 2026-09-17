import { Link } from "react-router-dom";
import "./SitePage.css";

const pageContent = {
  about: ["About Ondes Positive", "Thoughtful India journeys, planned with local knowledge and genuine care."],
  contact: ["Let's plan your India journey", "Speak with our travel team for a private itinerary built around your pace and interests."],
  gallery: ["India, seen your way", "Browse our destinations and let the next journey begin."],
  privacy: ["Privacy Policy", "We use the information shared in an enquiry only to respond to your travel request."],
  terms: ["Terms & Conditions", "Every itinerary is confirmed after availability, inclusions and pricing are agreed with you."],
};

function SitePage({ type }) {
  const [title, description] = pageContent[type];
  return <main className="site-page"><span>ONDES POSITIVE INDIA VACATION</span><h1>{title}</h1><p>{description}</p>{type === "contact" && <div className="site-actions"><a href="mailto:Ondespositiveindiavacation.in@gmail.com">Email us</a><a href="tel:+918890420515">Call +91 88904 20515</a><Link to="/enquiry">Send an enquiry</Link></div>}{type === "gallery" && <Link className="site-actions" to="/destinations">Explore destinations</Link>}</main>;
}

export default SitePage;
