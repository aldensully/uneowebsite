import {VStack,SimpleGrid, Box,Container,Flex,Heading,Text,Stack } from "@chakra-ui/react";
import {BiRun} from 'react-icons/bi';
import {AiOutlineCar} from 'react-icons/ai';
import {BiFoodMenu} from 'react-icons/bi';
import {RiMentalHealthLine} from 'react-icons/ri';
export default function Resources(){

  function Card(props){
    return(
    <VStack spacing={5} color="primaryBlack" bg="white" rounded="12" p="5" alignItems="flex-start" textAlign="flex-start" w="300">
      {props.icon}
      <Text color="primaryBlack" fontSize="18" fontWeight="bold"> {props.title}</Text>
      <Text color="primaryBlack" opacity="80%" fontSize="16"> {props.body}</Text>
    </VStack>
    )
  }  

  return(
    <Box py={{base:10,md:20}} w="100%" bg="backgroundBlue">
      <Container p={10} maxW="1200px" centerContent>
        <Stack spacing={20} direction={{base:"column",sm:"column",md:"column",lg:"row"}}>
          <Flex color="primaryBlack" w={{base:"100%",sm:"100%",md:"50%",lg:"40%"}} direction="column">
            <Heading fontSize={{base:24,md:36}}>Trusted Resources Are The Foundation Of Teens' Success</Heading>
            <Text mt={5} opacity="80%" fontSize={{base:16,md:18}}>Curated, personalized content that educates and supports the user along their journey - addresing social determinant challenges.</Text>
          </Flex>
          <SimpleGrid w={{base:"100%",sm:"100",md:"100%",lg:"50%"}} spacing={5} columns={{base:1,sm:1,md:2}}>
            <Card icon={<BiRun size="40" color="#6A8BF5"/>} title="Physical Health" body="Educational links, local fitness and gym resources based on the users geography, online free coaching and events."/>
            <Card icon={<BiFoodMenu size="40" color="#6A8BF5"/>} title="Nutrition" body="Education, support and local restaurant coupons to support better eating choices and nutrition."/>
            <Card icon={<AiOutlineCar size="40" color="#6A8BF5"/>} title="Transportation" body="Supporting access needs, the user will find local services including Uber/Lyft vouchers."/>
            <Card icon={<RiMentalHealthLine size="40" color="#6A8BF5"/>} title="Mental Health" body="A library of curated, educational resources as well as free online support for anxiety, depression, and similar issues."/>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}