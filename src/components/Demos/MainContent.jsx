'use client';
import React, { useEffect } from 'react';
//= Components
import Pages from './Pages';
import Showcases from './Showcases';
import InnerPages from './InnerPages';
import Services from './Services';
import CallToAction from './CallToAction';
//= Scripts
import initIsotope from "@/common/initIsotope";
import Home8 from '@/app/(arch-dark)/homepage/home8-dark/page';

function MainContent() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <div >
      <Home8 />
      {/* <Pages /> */}
      {/* <Showcases /> */}
      {/* <InnerPages />
      <Services />
      <CallToAction /> */}
    </div>
  )
}

export default MainContent