import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import ResourceCard from './ResourceCards';

export default function PlatformResources(props) {
  return (
    <Flex
      direction="column"
      wrap="no-wrap"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex  rounded="32" bg="blue.100" w="1400px" h="80vh" maxW="1400px"
      bgGradient="linear(to-b,#f5fdff,#fff5fa)"
      flexDir="row"
      >
        <Flex flexDir="column" w="50%" p="10">
          <Heading fontSize="48" fontWeight="regular">Trusted Resources Are The Foundation of Teens' Success</Heading>
          <Text fontSize="24" fontWeight="regular" mt="5">Curated, personalized content that educates and supports the teen's journey - addressing social determinant challenges.</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}