import {Flex,Box,Text} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavButtons(props){
  const underlineColor = "#5D38F1";
  const [current,setCurrent] = React.useState(props.current);

  return(
    <>
    <Flex flexDir="column" p={2} alignItems="center" fontWeight="bold" rounded="lg" borderRadius="0px"  m={5}>
      <Link to="/">
        <Text fontSize="lg">
          Home
        </Text>
      </Link>
      <Box h="2px" w="8px" bgColor={current == "home" ? underlineColor:"none"}/>
    </Flex>
    <Flex flexDir="column" alignItems="center" p={2} fontWeight="bold" rounded="lg" borderRadius="0px" m={5}>
      <Link to="/platform">        
        <Text fontSize="lg">
          Platform
        </Text>
      </Link>
      <Box h="2px" w="8px" bgColor={current == "platform" ? underlineColor:"none"}/>
    </Flex>
    <Flex flexDir="column" alignItems="center" p={2} fontWeight="bold" rounded="lg" borderRadius="0px" m={5}>
      <Link to="/about">
      <Text fontSize="lg">
          About Us
        </Text>
      </Link>
      <Box h="2px" w="8px" bgColor={current == "about" ? underlineColor:"none"}/>
    </Flex>
    <Flex flexDir="column" alignItems="center" p={2} fontWeight="bold"rounded="lg" borderRadius="0px" m={5}>
      <Link to="/contact">        
        <Text fontSize="lg">
          Contact
        </Text>
      </Link>
      <Box h="2px" w="8px" bgColor={current == "contact" ? underlineColor:"none"}/>
    </Flex>
    </>
  )
}