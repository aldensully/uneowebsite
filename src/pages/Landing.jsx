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
export default function Landing(props) {

  const bg = useColorModeValue('#fff', '#020413'); // 191e25 0D0D2B e0e1dd 3c4eff 020413 040A30
  const bgGrad = "linear(to-br, #040a30, #0d1c5e)";
  const textColor = useColorModeValue('#020413', '#eee');
  const accentTextColor = useColorModeValue('green.400', 'green.400');
  return (
    <>
      <Navbar2/>
      <Hero />
      <PlatformInfo/>
      <Features2/>
      {/* <UserJourney/> */}
    </>
  )
}