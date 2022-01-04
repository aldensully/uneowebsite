import React from 'react';
import { Container, Box, Stack, Flex, Heading, Text } from '@chakra-ui/react';

export default function Mission(props) {
  return (
    <Box color="primaryBlack" mt={10} w="100%" align="center" p={10} bg="backgroundBlue">
      <Stack direction={{base:"column",md:"row"}} spacing={{base:5,md:10}} p={{base:0,md:20}} maxW="1000px" align={{base:"flex-start",md:"center"}}>
        <Heading color="primaryBlack" textAlign="left">Our Mission</Heading>
        <Box display={{base:"none",md:"flex"}} w={1} h={20} bg="primaryBlack"/>
        <Text color="primaryBlack" opactiy="80%" textAlign="left">Provide a novel, innovative platform that will excite, educate and inspire teenagers (especially those in vulnerable populations), giving them the tools they need to improve their overall well-being.</Text>
      </Stack>
    </Box>
  )
}