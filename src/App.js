import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Platforms from './components/Platforms';
import Features from './components/Features';
import TokenSale from './components/TokenSales';
import Timeline from './components/Timeline';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import Downloads from './components/Downloads';
import Faq from './components/Faq';
import LatestNews from './components/LatestNews';
import Contact from './components/Contact';
import Newsletter from "./components/NewsLetter";
import Footer from './components/Footer';
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Navbar />
      <HeroSection/>
      <Platforms/>
      <Features/>
      <TokenSale/>
      <Timeline/>
      <TeamSection/>
      <Testimonials/>
      <Downloads/>
      <Faq/>
      <LatestNews/>
      <Contact/>
      <Newsletter />
      <Footer/>
    </div>
  );
}
export default App;
