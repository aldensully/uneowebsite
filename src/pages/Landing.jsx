import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/Hero';

import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import AppFeatures from '../components/appFeaturesPage/AppFeatures';
import PrivacyFooter from '../components/PrivacyFooter';


export default function Landing(props) {

  const bg = useColorModeValue('#DEE4E7', '#020413'); // 191e25 0D0D2B e0e1dd 3c4eff 020413 040A30
  const bgGrad = "linear(to-br, #040a30, #0d1c5e)";
  const textColor = useColorModeValue('#020413', '#eee');
  const accentTextColor = useColorModeValue('green.400', 'green.400');
  return (
    <Box bg={bg} color={textColor} overflowX="hidden" >
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1400px" }}
        m="0 auto"
        {...props}
      >
        <Navbar current="home" />
        <Hero />
      </Flex>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1600px" }}
        m="0 auto"
        mb={10}
        {...props}
      >
        <Text fontSize={{ base: "2xl", md: "3xl" }} mb={10} >
          With Uneo You Can...
        </Text>
        <AppFeatures />
        <PrivacyFooter />
      </Flex>
    </Box>
  )
}