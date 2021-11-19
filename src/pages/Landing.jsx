import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import BottomHero from '../components/BottomHero';

import {Box,Text,Button,Flex,Heading, useColorModeValue, Spacer} from '@chakra-ui/react';
import AppFeatures from '../components/appFeaturesPage/AppFeatures';
import PrivacyFooter from '../components/PrivacyFooter';


export default function Landing(props){
  
  const bg = useColorModeValue('#EFECFE','#040A30'); // 191e25 0D0D2B e0e1dd 3c4eff
  const bgGrad = "linear(to-br, #040a30, #0d1c5e)";
  const textColor = useColorModeValue('#020413','#fff');
  const accentTextColor = useColorModeValue('green.400','green.400');
  return(
      <Box bg={bg} color={textColor} overflowX="hidden" >
        <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1400px" }}
        m="0 auto"
        {...props}
        >
        <Navbar current="home" />
        <Hero/>
      </Flex>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1600px" }}
        m="0 auto"
        mb={10}
        {...props}
        >
          <Heading mt={10} as="h2">
            With Uneo You Can...
          </Heading>
          <AppFeatures/>
          <PrivacyFooter/>
      </Flex>
        </Box>
    )
}