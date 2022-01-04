import React from 'react';
import Navbar2 from '../components/Navbar2';
import Hero from '../components/Hero';
import Features2 from '../components/appFeaturesPage/Features2';
import { Box,Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import AppFeatures from '../components/appFeaturesPage/AppFeatures';
import PrivacyFooter from '../components/PrivacyFooter';
import PlatformInfo from '../components/platformPages/PlatformInfo';
import Mission from '../components/aboutPages/Mission';
import UserJourney from './UserJourney';
import Statistics from './Statistics';
import Services from './Services';
import PlatformResources from '../components/platformPages/PlatformResources';
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
      <About/>
      <Mission/>
      <Contact/>
    </>
  )
}