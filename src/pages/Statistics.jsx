import { Flex, Box, Image, Heading, SimpleGrid, Text, Stack, HStack, useColorModeValue } from '@chakra-ui/react';

export default function Statistics(){
  return(
    <Flex bg="gray.100" flexDir="column" alignItems="center" w="100%" minH="100vh">
      <Flex mt={40} maxW="1000px" flexDir="row">
        <Heading maxW="56">Teen health at a glance</Heading>
        <SimpleGrid spacing={10} columns="2">
          <Flex flexDir="column">
            <Heading>1 in 3</Heading>
            <Text>teenagers in the US are overweight.</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading>1 in 3</Heading>
            <Text>teenagers in the US are overweight.</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading>1 in 3</Heading>
            <Text>teenagers in the US are overweight.</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading>1 in 3</Heading>
            <Text>teenagers in the US are overweight.</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}