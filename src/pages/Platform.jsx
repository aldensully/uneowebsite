import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import PlatformInfo from '../components/platformPages/PlatformInfo';
import PlatformVisual from '../components/platformPages/PlatformVisual';
import PlatformResources from '../components/platformPages/PlatformResources';
import ProviderPortal from '../components/platformPages/ProviderPortal';

import {Box,Text,Button,Flex,Heading, useColorModeValue, Spacer} from '@chakra-ui/react';


export default function Platform(props){
  
  const bg = useColorModeValue('#EFECFE','#040A30'); // 191e25 0D0D2B
  const bgGrad = "linear(to-br, #040A30, #0D1C5E)"; 
  //const bgGrad = "linear(to-br, #3fadfe, #3c4eff)"; 
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
        <Navbar current="platform" />
        <PlatformInfo/>
        <PlatformResources/>
      </Flex>
        <ProviderPortal/>
      </Box>
    )
}