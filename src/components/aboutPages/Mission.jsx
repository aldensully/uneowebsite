import React from 'react';
import {Flex,Heading,Text} from '@chakra-ui/react';

export default function Mission(props){
  return(

      <Flex overflow="hidden" alignItems="center" justifyContent="center" wrap={{base:"wrap-reverse",sm:"wrap-reverse",md:"nowrap"}}  >
        <Flex m={{base:5, md:10, xl:20}} flexDir="column" alignItems="flex-start" justifyContent="flex-start" maxW={{base:"xs",md:"xs",lg:"md",xl:"lg"}}>
          <Heading my={5} fontSize="5xl" justifyContent="flex-start">
            Our Mission
          </Heading>
          <Text fontSize="2xl">
            Deploy a novel, innovative platform that will support teenagers in vulnerable populations by giving them the tools needed to eat better, exercise more, and improve overall wellness.
          </Text>
        </Flex>
        <Flex m={{base:5,md:10,xl:40}} maxW={{base:"xs",md:"xs",lg:"md",xl:"3xl"}}>
          <Heading fontSize={{base:"3xl",sm:"4xl",xl:"6xl"}} fontStyle="italic" fontFamily="montserrat-500">
          </Heading>
        </Flex>
      </Flex>
  )
}