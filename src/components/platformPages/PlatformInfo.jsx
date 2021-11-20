import React from 'react';
import { Flex, Box, Image, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';

export default function PlatformInfo(props) {

  const bg = useColorModeValue("#fff", "#5D38F1");

  return (
    <Stack
      spacing={{ base: 10, md: 15, lg: 40 }}
      direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={14}
      mb={10}
      justifyContent="space-around"
      align="center"
    >

      <Box boxShadow="2xl" rounded="full" bg={bg} w={{ base: "2xs", md: "xs", xl: "md" }} h={{ base: "2xs", md: "xs", xl: "md" }}>
        <Image src="phone-hand-fitness_transparent.png" />
      </Box>
      <Flex w={{ base: "xs", md: "sm", xl: "lg" }} flexDir="column" maxW="2xl" alignItems="flex-start" justifyContent="flex-start">
        <Heading mb={4} fontSize="5xl">
          What is the Uneo Platform?
        </Heading>
        <Text fontSize="xl">
          Uneo is a user-friendly app which seeks to give teenagers, especially those in vulnerable populations, access to tools, education, and community-based support to meet their personal wellness needs.
          With Uneo, bi-directional engagement between wellness providers and the younger generation is easier than ever.
        </Text>
      </Flex>
    </Stack>
  )
}