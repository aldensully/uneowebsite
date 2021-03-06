import react, {useState} from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Simple() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [open,setOpen] = useState(false);
  return (
      <Box bg="white" 
      zIndex="5"
      sx={{position:"-webkit-sticky", position:'sticky',top:0}}
      display={open ? "inherit":"flex"} justifyContent="center" w="100%"> 
        <Flex w={1200} p={10} align="center" justify="space-between" h={20} >
          <IconButton
            size={'md'}
            icon={open ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            _hover={{bg:"primaryBlue"}}
            onClick={()=>setOpen(!open)}
            bg="primaryBlue"
            color="white"
          />
          <Flex justify="center" align="center">
            <Image w="36px" src="logo_black.png"/>
            <a href="#home" display={open ? "none":"inherit"}>Uneo</a>
          </Flex>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}
              >
                <a href="#home">Home</a>
                <a href="#platform">Platform</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                
            </HStack>
              <Flex display={{base:"none",md:"flex"}} >
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
              </Flex>

        {open ? (
          <Flex alignItems="center" bg="gray.100" p={4} display={{ md: 'none' }}>
            <Stack alignItems="center" as={'nav'} spacing={4}>
              <a onClick={()=>setOpen(false)} href="#home">Home</a>
              <a onClick={()=>setOpen(false)} href="#platform">Platform</a>
              <a onClick={()=>setOpen(false)} href="#about">About Us</a>
              <a onClick={()=>setOpen(false)} href="#contact">Contact</a>
              <Link onClick={()=>setOpen(false)} color="primaryBlue" href="#contact">Newsletter</Link>
            </Stack>
          </Flex>
        ) : null}
      </Box>
  );
}