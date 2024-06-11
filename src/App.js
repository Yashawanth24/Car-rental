
import { useRef } from 'react';
import './App.css';
import Body from './components/Body';
import CarBokking from './components/CarBokking';
import Header1 from './components/Header1';
import VechicalModels from './components/VechicalModels';

import TestimonialList from './components/Testimonial';

function App() {
  const carBookingRef=useRef(null)

  const scrollToCarBooking=()=>{
    carBookingRef.current.scrollIntoView({behavior:"smooth"});
  }
  return (
    
      <div>
        <Header1/>
        <Body/>
        <div ref={carBookingRef}>
        <CarBokking/>
        </div>
        <VechicalModels onReserveNowClick={scrollToCarBooking}/>
        <TestimonialList/>
      </div>

  );
}

export default App;