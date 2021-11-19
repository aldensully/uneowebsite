import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
    Spacer,
    Button
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from './Logo';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NavButtons from './NavButtons';

export default function Navbar(props){
    const [show,setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);

    return(
        <Flex      
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        {...props}
        >
          <Flex align="center">
            <Logo w="100px"/>
          </Flex>

          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            {show ? <CloseIcon /> : <HamburgerIcon boxSize="30px"/>}
          </Box>

          <Box
            display={{ base: show ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Flex
              align={["center", "center", "center", "center"]}
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "column", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <NavButtons {...props}/>
              <ColorModeSwitcher/>
            </Flex>
      </Box>

        </Flex>
    )
}