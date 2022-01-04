import React from 'react';
import Navbar2 from '../components/Navbar2';
import Hero from '../components/Hero';
import Features2 from '../components/appFeaturesPage/Features2';
import PlatformInfo from '../components/platformPages/PlatformInfo';
import Mission from '../components/aboutPages/Mission';
import UserJourney from './UserJourney';
import Statistics from './Statistics';
import Services from './Services';
import Resources from './Resources';
import About from './About';
import Contact from './Contact';
export default function Landing(props) {

  return (
    <>
      <Navbar2/>
      <Hero />
      <PlatformInfo/>
      <Features2/>
      <UserJourney/>
      <Resources/>
      <About/>
      <Mission/>
      <Contact/>
    </>
  )
}