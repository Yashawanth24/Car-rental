
import { useRef } from 'react';
import './App.css';
import Body from './components/Body';
import CarBokking from './components/CarBokking';
import Header1 from './components/Header1';
import VechicalModels from './components/VechicalModels';

import TestimonialList from './components/Testimonial';
import ChooseUs from './components/Company';
import Footer from './components/Footer';

function App() {
  const carBookingRef=useRef(null)
  const vechicalRef=useRef(null);
  const footerRef=useRef(null);
  const headerRef=useRef(null);

  const scrollToCarBooking=()=>{
    carBookingRef.current.scrollIntoView({behavior:"smooth"});
  };
  const scroolToVechical=()=>{
    vechicalRef.current.scrollIntoView({behavior:'smooth'})
  };
  const scroolFooter=()=>{
 footerRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollHeader=()=>{
 headerRef.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    
      <div>
        <div ref={headerRef}>
        <Header1 Onheader={scrollHeader} Onfooter={scroolFooter} onVechicalModelsClick={scroolToVechical}/>
        </div>
        <Body onReserveNowClick={scrollToCarBooking}/>
        <div ref={carBookingRef}>
        <CarBokking/>
        </div>
        <div ref={vechicalRef}>
        <VechicalModels onReserveNowClick={scrollToCarBooking}/>
        </div>
        <ChooseUs/>
        <TestimonialList/>
        <div ref={footerRef}>
        <Footer />
        </div>
      </div>

  );
}

export default App;