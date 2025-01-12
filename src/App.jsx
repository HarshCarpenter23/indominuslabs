
import './App.css'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/LandingPage'
import MentorsSection from './components/Mentor'
import Navbar from './components/Navbar'
import PartnersSection from './components/PartnersSection'
import ProductsShowcase from './components/ProductCards'
import ReviewCardSlider from './components/ReviewCardSlider'
import WebSolutions from './components/WebSolutions'


function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <ProductsShowcase/>
      <WebSolutions/>
      <PartnersSection/>
      <MentorsSection />
      <ReviewCardSlider/>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default App
