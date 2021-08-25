import React from 'react';
import CCarousel from '../../Components/CCarousel/CCarousel';
import About from '../../Components/About/About';
import Barbers from '../../Components/Barbers/Barbers';
import Services from '../../Components/Services/Services';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <CCarousel />
      <About />
      <Barbers />
      <Services />
      <Footer />
    </>
  );
}
