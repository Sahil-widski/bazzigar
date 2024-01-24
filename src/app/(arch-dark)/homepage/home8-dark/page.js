import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarArch from '@/components/Common/NavbarArch';
import Header from '@/components/Headers/Header5';
import AboutUs from '@/components/AboutUs/AboutUs6';
import Services from '@/components/Services/Services6';
import Works from '@/components/Works/Works6';
import Team from '@/components/Team/Team3';
import CaseStudy from '@/components/Others/CaseStudy';
import TestimonialsArch from '@/components/Testimonials/TestimonialsArch';
import LatestNews from '@/components/Others/LatestNews';
import ContactArch from '@/components/Contact/ContactArch';
import FooterArch from '@/components/Common/FooterArch';
import Showcase3Page from '@/app/(dark)/showcase3/showcase3-dark/page';
import WhatsAppButton from '@/components/Common/whatsapp';

// export const metadata = {
//   title: 'Vie - Architecture Dark'
// }

export default function Home8() {
  return (
    <>
      {/* // <Loading /> */}
      <NavbarArch />
      <Header />
      <AboutUs />
      <Services />
      <Showcase3Page />
      {/* <Works />
      <CaseStudy />
      <Team />
      <TestimonialsArch />
      <LatestNews />
      <ContactArch /> */}
      <WhatsAppButton />
      <FooterArch />
    </>
  )
}