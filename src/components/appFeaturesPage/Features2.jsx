import React from 'react';
import { Flex,Icon,Container, VStack, Box, Text, Image,useColorModeValue,Heading, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Block(props){
  return(
    <VStack color="primaryBlack" bg="white" rounded="12" p="5" alignItems="flex-start" textAlign="flex-start" w="300">
      <Icon my={4} boxSize="10"/>
      <Text fontSize="18" fontWeight="bold"> {props.title}</Text>
      <Text opacity="80%" fontSize="16"> {props.body}</Text>
      <a style={{marginTop:20,width:"fit-content",display:props.display}} href="#platform">
        <Flex
        fontSize="14"
        rounded="full" 
        w="fit-content"
        alignItems="center"
        flexDir="row"
        fontWeight="bold"
        py="2"
        bg=""
        color="primaryBlue"
        >
          Learn More
          <ArrowForwardIcon mx="2"/>
        </Flex>
      </a>
    </VStack>
  )
}
export default function Features2(){
  return(
    <Flex
      dir="column" align="center" 
      justify="center"
      bg="backgroundBlue"
      w="100%"
      pb={20}
    >
      <Flex color="primaryBlack" mt="20" justifyContent="space-evenly" flexDir="column" p={8} maxW="1200px">
      <Heading alignSelf="flex-start" fontSize={{base:"36",md:"48"}} fontWeight="regular" textAlign="left">Platform Features</Heading>
      <Text mt="5" w={{base:"80%",md:"50%"}} alignSelf="flex-start" fontSize="16" opacity="80%" fontWeight="regular">Uneo supports a full range of features to give teens more options and to allow providers the opportunity to build stronger functionalities within the app.</Text>
      <SimpleGrid mt={{base:"10",md:"20"}} spacing={10} columns={{base:1,sm:1,md:2,lg:2,xl:4}}>
        <Block display="none" title="Goal Setting" body="An interactive, engaging yet simple way for teens to set and manage their goals, supported by nudges and incentives. Milestone progress made easy."/>
        <Block display="normal" title="Resources" body="Easy-to-navigate options including eduactional content, community resources and online coaching to support the well-being goals of teens."/>
        <Block display="none" title="Engagement" body="Healthcare providers, health plan care managers, community resources and the teen's own friends are part of a safe, positive, bi-directional support model."/>
        <Block display="none" title="Connectivity" body="Built-in wellness decive APIs and provider/health plan connectivity to support teen-mediated information sharing and enabling goal metric data collection."/>
      </SimpleGrid>
      <a style={{marginTop:100,width:"fit-content",alignSelf:"center"}} href="#contact">
        <Flex bg="primaryBlue" shadow="xl" color="white" rounded="full" p="5" alignSelf="center">Subscribe to Get Updates</Flex>
      </a>
      </Flex>
    </Flex>
  )
}