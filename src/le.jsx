import React from 'react';
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from './LandingPage/FirstPage/FirstPage';
import Secondpage from './LandingPage/FifthSecton/Secondpage/Secondpage';
import ThirdSection from './LandingPage/FifthSecton/ThirdSection/ThirdSection';
import ForthSection from './LandingPage/ForthSection/ForthSection';
import SixthSection from './LandingPage/FifthSecton/SixthSection/SixthSection';
import FifthSection from './LandingPage/FifthSecton/FifthSection';
import Lastpage from './LandingPage/Lastpage/lastpage';
import {Swiper} from 'swiper/react'

const Le = () => {

  const locomotiveScroll= new LocomotiveScroll();

  return (
 <Swiper>
    <>
      <Navbar />
      <Secondpage />
      <Lastpage />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      </>
      </Swiper>
  )
}

export default Le;