import React, { useState, useEffect } from 'react';
import { Flex, Stack, Heading, Box, Image, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProviderPortal() {
  const words = ['community leaders', 'school systems', 'educators', 'organizers', 'wellness experts', 'youth groups', 'health plans', 'teens', 'the next generation'];
  const [index, setIndex] = useState(0);
  const [last, setLast] = useState(true);

  const buttonTextColor = useColorModeValue("#eee", "#eee");

  useEffect(() => {
    const interval = setInterval(() => {
      setLast(!last);
      if (index < words.length - 1) {
        setIndex(index + 1);
      }
      else setIndex(0);
    }, 1500);
    return () => {
      clearInterval(interval);
    }
  }, [index])

  return (
    <Flex
      align="center"
      flexDir="column"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      flexGrow={2}
    >
      {/* <Heading fontSize="4xl">
        Provider Portal
      </Heading> */}

      <Stack
        spacing={{ base: 15, md: 20, lg: 64 }}
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        align="center"
        my={20}
      >
        {/* <Box w={{ base: "2xs", md: "xs", xl: "md" }} h={{ base: "2xs", md: "xs", xl: "md" }}>
          <Image src="handshake-outline.png" />
        </Box> */}
        <Flex w={{ base: "xs", md: "sm", xl: "md" }} flexDir="column" maxW="2xl" alignItems="center" >
          <Heading fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
            Wondering How You Can Get Involved?
          </Heading>
          <Flex mt={20} flexDir="row">
            <Box my={10}>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.1 }}>
                  <Box color={buttonTextColor} display="flex" flexDir="row" alignItems="center" boxShadow="xl" bg="#5D38F1"
                    fontSize={{ base: "md", xl: "xl" }} rounded="full" py={{ base: 3, md: 5 }} px={{ base: 4, md: 8 }}>
                    Contact Us
                  </Box>
                </motion.button>
              </Link>
            </Box>
            <Box ml={10} my={10}>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.1 }}>
                  <Box textColor={buttonTextColor} display="flex" flexDir="row" alignItems="center" boxShadow="xl" bg="#F56565"
                    fontSize={{ base: "md", xl: "xl" }} rounded="full" py={{ base: 3, md: 5 }} px={{ base: 4, md: 8 }}>
                    Provider Portal
                  </Box>
                </motion.button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Stack>


      <Flex mb={40} w="350px" alignItems="center" flexDir="column" >
        <Heading>
          Uneo supports
        </Heading>

        {last ?
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          >
            <Heading fontSize="4xl" color="#5D38F1"  >
              {words[index]}
            </Heading>
          </motion.div>
          :
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <Heading fontSize="4xl" color="#5D38F1"  >
              {words[index]}
            </Heading>
          </motion.div>
        }
      </Flex>
    </Flex>
  )
}