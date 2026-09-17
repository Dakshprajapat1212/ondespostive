import delhi from "../assets/Delhi.png";
import udaipur from "../assets/Udaipur.png";
import jaisalmer from "../assets/Jaisalmer.png";
import jodhpur from "../assets/Jodhpur.png";
import jaipur from "../assets/Jaipur.png";
import agra from "../assets/Agra.png";
import goldenTriangle from "../assets/GoldenTriangle.png";
import royalRajasthan from "../assets/RoyalRajasthan.png";
import luxuaryRajasthan from "../assets/LuxuaryRajasthan.png";
import desertSafari from "../assets/DesertSafari.png";
import crysta from "../assets/Crysta.png";
import ertiga from "../assets/Ertiga.png";
import etios from "../assets/Etios.png";
import tempoTraveller from "../assets/TempoTraveller.png";
import luxuryCars from "../assets/LuxuryCars.png";
import hycross from "../assets/Highcross.png";

export const destinations = [
  { slug: "delhi", name: "Delhi", subtitle: "The Heart of India", duration: "2 Nights / 3 Days", image: delhi, description: "Discover Old Delhi's vibrant markets, grand monuments and the modern capital's rich culture." },
  { slug: "agra", name: "Agra", subtitle: "Home of Taj Mahal", duration: "1 Night / 2 Days", image: agra, description: "Experience the Taj Mahal at sunrise, Agra Fort and the timeless Mughal heritage of the city." },
  { slug: "jaipur", name: "Jaipur", subtitle: "The Pink City", duration: "2 Nights / 3 Days", image: jaipur, description: "Walk through colourful bazaars, royal forts and the elegant palaces of Rajasthan's capital." },
  { slug: "jodhpur", name: "Jodhpur", subtitle: "The Blue City", duration: "2 Nights / 3 Days", image: jodhpur, description: "See the mighty Mehrangarh Fort and explore the blue lanes of this unforgettable desert city." },
  { slug: "udaipur", name: "Udaipur", subtitle: "City of Lakes", duration: "2 Nights / 3 Days", image: udaipur, description: "Cruise across Lake Pichola and enjoy palaces, sunsets and the romance of the Aravallis." },
  { slug: "jaisalmer", name: "Jaisalmer", subtitle: "Golden City", duration: "2 Nights / 3 Days", image: jaisalmer, description: "Stay in the Thar Desert, ride a camel at sunset and explore the living golden fort." },
];

export const packages = [
  { slug: "golden-triangle-tour", name: "Golden Triangle Tour", places: "Delhi - Agra - Jaipur", duration: "6 Days / 5 Nights", feature: "Automobile", image: goldenTriangle, popular: true, description: "A classic India journey combining Delhi's heritage, Agra's Taj Mahal and Jaipur's royal charm." },
  { slug: "royal-rajasthan-tour", name: "Royal Rajasthan Tour", places: "Jaipur - Jodhpur - Jaisalmer - Udaipur", duration: "8 Days / 7 Nights", feature: "Customisable", image: royalRajasthan, description: "Travel through Rajasthan's grand forts, colourful cities, desert landscapes and lakeside palaces." },
  { slug: "luxury-rajasthan-tour", name: "Luxury Rajasthan Tour", places: "Jaipur - Udaipur - Jodhpur - Jaisalmer", duration: "10 Days / 9 Nights", feature: "Luxury Hotels", image: luxuaryRajasthan, description: "A refined Rajasthan escape with premium stays, private transfers and carefully paced experiences." },
  { slug: "desert-safari-tour", name: "Desert Safari Tour", places: "Jaisalmer - Bikaner - Camel Safari", duration: "6 Days / 5 Nights", feature: "Adventure", image: desertSafari, description: "Meet the desert at its most atmospheric with dunes, folk music, camel rides and starry camps." },
];

export const vehicles = [
  { slug: "toyota-innova-crysta", name: "Toyota Innova Crysta", seats: "6+1 Seats", feature: "Premium AC", image: crysta, description: "A comfortable choice for families and small groups travelling between cities with generous luggage space." },
  { slug: "innova-hycross", name: "Toyota Innova Hycross", seats: "6+1 Seats", feature: "Premium AC", image: hycross, description: "A modern premium vehicle with a smooth ride, generous space and comfort for longer journeys." },
  { slug: "toyota-ertiga", name: "Toyota Ertiga", seats: "6+1 Seats", feature: "Comfort AC", image: ertiga, description: "An economical, smooth and spacious car for city tours and Rajasthan road journeys." },
  { slug: "toyota-etios", name: "Toyota Etios", seats: "4+1 Seats", feature: "Budget AC", image: etios, description: "A reliable compact sedan for couples and small groups who want easy private travel." },
  { slug: "tempo-traveller", name: "Tempo Traveller", seats: "12+1 Seats", feature: "Group Travel", image: tempoTraveller, description: "Roomy group transport with comfortable seating for family tours, airport transfers and long routes." },
  { slug: "luxury-car", name: "Luxury Cars", feature: "Large Groups", image: luxuryCars, description: "A premium option for larger groups with comfortable interiors and dependable experienced drivers." },
];

export const allTravelItems = [...destinations, ...packages, ...vehicles];
