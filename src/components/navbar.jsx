import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from './Logo';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NavButtons from './NavButtons';

export default function Navbar(props) {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      w="100%"
      {...props}
      h="8vh"
      bg="white"
      // bg="backgroundBlue"
      color="primaryBlack"
      zIndex="4"
      sx={{position:"-webkit-sticky", position:'sticky', top:0}} 
    >
      <Flex bg="white" w="1200px" >
        <Flex alignItems="center" justifySelf="flex-start">
        <a href="#home">
            <Flex alignItems="center" >
                <Image w="36px" src="logo_black.png" />
                <Heading ml="2" fontSize="18" >
                    Uneo
                </Heading>
            </Flex>
        </a>
        </Flex>
      <Box alignSelf="flex-end" display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon boxSize="30px" />}
      </Box>

      <Flex
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        w="100%"
      >
        <Flex
          align="center"
          justify={["center", "center", "center", "center"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <NavButtons {...props} />
        </Flex>
      </Flex>
      </Flex>
    </Flex>
  )
}