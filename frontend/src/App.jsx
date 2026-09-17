import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import PopularDestinations from './components/Packages/PopularDestinations'
import WhyChooseUs from './components/Choose/WhyChooseUs'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import TravelDetail from './pages/TravelDetail'
import Services from './pages/Services'
import SitePage from './pages/SitePage'
import AboutPage from './pages/AboutPage'

const Home = () => <><Hero/><PopularDestinations/><WhyChooseUs/><Testimonials/></>
const Listing = () => <PopularDestinations />

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Listing />} />
      <Route path="/packages" element={<Listing />} />
      <Route path="/destinations/:slug" element={<TravelDetail />} />
      <Route path="/packages/:slug" element={<TravelDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<TravelDetail />} />
      <Route path="/enquiry" element={<div className="enquiry-page"><Hero initialTour="India Custom Tour" /></div>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<SitePage type="contact" />} />
      <Route path="/gallery" element={<SitePage type="gallery" />} />
      <Route path="/privacy" element={<SitePage type="privacy" />} />
      <Route path="/terms" element={<SitePage type="terms" />} />
      <Route path="*" element={<AboutPage />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
