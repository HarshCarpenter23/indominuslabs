import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScheduleDemo from './components/ScheduleDemo';
import Footer from './components/Footer';
import Landing from './components/LandingPage';
import MentorsSection from './components/Mentor';
import Navbar from './components/Navbar';
import PartnersSection from './components/PartnersSection';
import ProductsShowcase from './components/ProductCards';
import ReviewCardSlider from './components/ReviewCardSlider';
import WebSolutions from './components/WebSolutions';
import EMauth from './components/EMauth';
import BehaviouralBiometrics from './components/BehaviouralBiometrics';
import About from './components/AboutUs';
// import HowItWorks from './components/HowItWorks';

// Create a MainLayout component to hold all components except ScheduleDemo
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <ProductsShowcase />
      <EMauth />
      {/* <HowItWorks /> */}
      <BehaviouralBiometrics />
      {/* <WebSolutions /> */}
      {/* <PartnersSection /> */}
      <MentorsSection />
      <ReviewCardSlider />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={<MainLayout />} />
        
        {/* Schedule demo route */}
        <Route 
          path="/scheduledemo" 
          element={
            <>
              <Navbar />
              <ScheduleDemo />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/about" 
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;