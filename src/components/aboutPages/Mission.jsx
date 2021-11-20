import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Mission(props) {
  return (

    <Flex overflow="hidden" alignItems="center" justifyContent="center" wrap={{ base: "wrap-reverse", sm: "wrap-reverse", md: "nowrap" }}  >
      <Flex m={{ base: 5, md: 10, xl: 20 }} flexDir="column" alignItems={{ base: "center", sm: "flex-start" }} maxW={{ base: "xs", md: "xs", lg: "md", xl: "lg" }}>
        <Heading my={5} fontWeight="normal" fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
          Our Mission
        </Heading>
        <Text fontWeight="normal" fontSize={{ base: "xl", lg: "2xl" }}>
          Deploy a novel, innovative platform that will support teenagers in vulnerable populations by giving them the tools needed to eat better, exercise more, and improve overall wellness.
        </Text>
      </Flex>
      <Flex alignItems={{ base: "center", sm: "flex-start" }} m={{ base: 5, md: 10, xl: 40 }} maxW={{ base: "xs", md: "xs", lg: "md", xl: "3xl" }}>
        <Heading fontSize={{ base: "3xl", sm: "4xl", xl: "6xl" }} fontStyle="italic" fontFamily="montserrat-500">
        </Heading>
      </Flex>
    </Flex>
  )
}