import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavButtons(props) {
  const underlineColor = "#5D38F1";
  const [current, setCurrent] = React.useState(props.current);

  return (
    <>
      <Flex flexDir="column" p={2} alignItems="center" rounded="lg" borderRadius="0px" m={5}>
        <a href="#home">
          <Text fontSize="16">
            Home
          </Text>
        </a>
        <Box h="2px" w="8px" bgColor={current == "home" ? underlineColor : "none"} />
      </Flex>
      <Flex flexDir="column" alignItems="center" p={2} rounded="lg" borderRadius="0px" m={5}>
        <a href="#platform">
          <Text >
            Platform
          </Text>
        </a>
        <Box h="2px" w="8px" bgColor={current == "platform" ? underlineColor : "none"} />
      </Flex>
      <Flex flexDir="column" alignItems="center" p={2} rounded="lg" borderRadius="0px" m={5}>
        <a href="#about">
          <Text>
            About Us
          </Text>
        </a>
        <Box h="2px" w="8px" bgColor={current == "about" ? underlineColor : "none"} />
      </Flex>
      <Flex flexDir="column" alignItems="center" p={2} rounded="lg" borderRadius="0px" m={5}>
        <a href="#contact">
          <Text >
            Contact
          </Text>
        </a>
        <Box h="2px" w="8px" bgColor={current == "contact" ? underlineColor : "none"} />
      </Flex>
      <Flex justifySelf="flex-end" alignSelf="center">
        <a style={{width:"fit-content"}} href="#contact">
          <Flex
          fontSize="14" fontWeight="bold"
          py="2" px="4"
          bg="primaryBlue" color="white" rounded="full" 
          alignItems="center">
            Newsletter
          </Flex>
        </a>
      </Flex>
    </>
  )
}