import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import Mission from '../components/aboutPages/Mission';
import Leadership from '../components/aboutPages/Leadership';

export default function About(props) {

  const bg = useColorModeValue('#DEE4E7', '#020413');
  const textColor = useColorModeValue('#020413', '#eee');
  //const bgGrad = "linear(to-br, #3fadfe, #3c4eff)";
  //const bgGrad = "linear(to-br, #040a30, #0d1c5e)";

  return (
    <Box bg={bg}
      color={textColor}
    >
      <Flex direction="column" align="center" m="0 auto" {...props} maxW={{ xl: "1400px" }}>
        <Navbar current="about" />
        <Mission />
      </Flex>
      <Leadership />
    </Box>
  )
}