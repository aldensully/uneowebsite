import { Box,Flex,useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Info from '../components/contactPages/Info';
import Form from '../components/contactPages/Form';

export default function Contact(props){
    
  const bg = useColorModeValue('#e0e1dd','#040A30');
  const textColor = useColorModeValue('#fff','#fff');
  const bgGrad = useColorModeValue("linear(to-br,#023E8A,#0077B6)","linear(to-br, #040a30, #0d1c5e)");

  return(
    <Box
    overflowY="scroll"
    height="100vh"
    bgGradient={bgGrad}
    color={textColor}>
    <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1400px" }}
    m="0 auto"
    {...props}
    >
    <Navbar current="contact" />
    <Flex mt={10} mb={40}  w={{base:"450px",md:"800px",xl:"1000px"}} alignItems="center" justifyContent="space-between" flexDir={{base:"column",lg:"row"}}>
      <Info/>
      <Form/>
    </Flex>
  </Flex>
    </Box>
  )
}