import {Flex} from '@chakra-ui/react';

export default function Test(){
  return(
    <Flex flexDir="column">
      <Flex flexGrow="2" minH="100vh" bg="red.300">
        
      </Flex>
      <Flex w="100%" minH="100vh" bg="blue.200">

      </Flex>
      <Flex w="100%" flexGrow="2" minH="100vh" bg="green.300">

      </Flex>
    </Flex>
  )
}