import React from 'react';
import { Flex,HStack,Center,Container, Box, Image, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import Mission from '../aboutPages/Mission';
export default function PlatformInfo(props) {

  const bg = useColorModeValue("#fff", "#5D38F1");

  return (
    <Container
      direction="column"
      align="center"
      id="platform"
      overflow="hidden"
      maxW="1200px"
      pb="20"
      p={8}
    >
    <Flex
      mt={{base:"10",md:"20",xl:"20"}}
      direction={{sm:"column-reverse",md: "column-reverse", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex w={{sm:"100%",md:"100%",lg:"50%"}} p={10} justify="center" alignItems="center" >
        <Image src="health_app_placeholder.png"/>
      </Flex>
      <Flex w={{md:"80%",lg:"50%"}} flexDir="column">
        <Heading color="primaryBlack" fontWeight="regular" alignSelf="flex-start" fontSize="36">
          About Uneo 
        </Heading>
        <Text textAlign="left" color="primaryBlack" mt="5" alignSelf="flex-start" opacity="80%" fontSize="16">
          The Uneo platform was launched with a simple vision - provide a “one stop shop” for teens to manage and improve their mind and body. A unique, engaging and secure experience designed by teens.
          <br/>
          <br/>
          The underlying Uneo platform provides a convenient resource for bi-directional engagement between community resources and teenagers in vulnerable populations to address health and digitial equity issues - including social determinant drivers.  Uneo assists teens with accessing better food options, education, improved well care (including mental health). 
          <br/>
          <br/>
          The initial launch of Uneo is focused on the underlying drivers of pre-diabetes. 

        </Text>
      </Flex>
    </Flex>
      <Flex flexDir={{base:"column",lg:"column"}} mt={{md:"0",lg:"20"}} p={8} justifyContent="space-between" maxW="1200px">
        <Flex align="center" flexDir="column">
          <Heading fontSize={{base:36}} color="primaryBlack" fontWeight="regular">The Challenge For Teenagers Is Immense</Heading>
          <Text mt="5" w={{base:"80%",md:"50%"}} textAlign="left" opacity="75%" fontSize="16">Despite growing concern for the mental and physical well-being of the 40 million teenagers in the United States, nearly all “wellness” apps are focused on adults.</Text>
        </Flex>
        <HStack mt={5} spacing="5" align="center" justifyContent="center">
          <Flex h="200px" bg="white" color="primaryBlue" justify="flex-start" textAlign="center" w="200px" p="5" flexDir="column" rounded="12">
            <Box position="absolute" zIndex="2" bg="primaryBlue"/>
            <Flex justifyContent="center" alignItems="flex-end" flexDir="row">
              <Heading fontSize="48">1</Heading>
              <Text ml="2" fontSize="24">in</Text>
              <Heading ml="2" fontSize="48">3</Heading>
            </Flex>
            <Text opacity="80%" mt="5">teens are overweight</Text>
          </Flex>
          <Flex h="200px" bg="white" color="primaryBlue" justify="flex-start" textAlign="center" w="200px" p="5" flexDir="column" rounded="12">
            <Flex justifyContent="center" alignItems="flex-end" flexDir="row">
              <Heading fontSize="48">1</Heading>
              <Text ml="2" fontSize="24">in</Text>
              <Heading ml="2" fontSize="48">5</Heading>
            </Flex>
            <Text mt="5">teens have prediabetes</Text>
          </Flex>
          <Flex h="200px" bg="white" color="primaryBlue" justify="flex-start" textAlign="center" w="200px" p="5" flexDir="column" rounded="12">
            <Flex justifyContent="center" alignItems="flex-end" flexDir="row">
              <Heading fontSize="48">1</Heading>
              <Text ml="2" fontSize="24">in</Text>
              <Heading ml="2" fontSize="48">3</Heading>
            </Flex>
            <Text mt="5">teens feel hopeless</Text>
          </Flex>
        </HStack>
      </Flex>

    </Container>
  )
}