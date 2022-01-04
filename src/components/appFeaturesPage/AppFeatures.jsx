import React from 'react';
import { Flex, VStack, Box, Text, Image,useColorModeValue,Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PrivacyFooter from '../PrivacyFooter';
import { Link } from 'react-router-dom';


export default function AppFeatures(props) {
  const bg = useColorModeValue("#f7f7f9","#10053E");
  const buttonBg = useColorModeValue("#5D38F1","#10053E");
  return (
    <Flex flexDir="column"
    w="100%"
    bg={bg}
    alignItems="center"
    flexGrow="2"
    justify="center"
    >
      <Text maxW="lg" fontSize={{base:"lg",md:"xl"}} fontWeight="normal">Features </Text>
      <Flex
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        justifyContent="center"
        alignItems="center"
        mt={{base:20,md:20}}
      >
        <VStack  alignItems="center"  >
          <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
            <Box w={{ base: "2xs", sm: "2xs", md: "sm" }}>
              <Text mb={2} lineHeight="1.2" fontSize="2xl" >
                Set Goals
              </Text>
              <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
                Set Goals and track progress on weight, physical activity, nutrition, mental health and more.
              </Text>
            </Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="fitness.png"
              ml={{ base: 2, md: 4, xl: 8 }}
              />
          </Flex>
          <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
            <Box w={{ base: "2xs", sm: "2xs", md: "lg" }}>
              <Text mb={2} lineHeight="1.2" fontSize="2xl" >
                Find Resources
              </Text>
              <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
                Connect with educators, wellness providers, and get access to transportation, fitness centers and food resources.
              </Text>
              <Link to="/platform">
                <Text mt={2} textDecoration="underline" textUnderlineOffset="3px" color="#10053E">
                  Learn More
                </Text>
              </Link>
              {/* <motion.button whileHover={{ scale: 1.1 }}>
                <Box boxShadow="xl" fontSize={{ base: "xs", md: "md" }} p={2} mt={2} size="sm" mt={4} _hover={{ bg: buttonBg }}
                bg={buttonBg} textColor="#EFECFE" rounded="full"
                >
                  Learn More
                </Box>
              </motion.button> */}
            </Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="natural-resources.png"
              ml={{ base: 2, md: 4, xl: 8 }}
              />
          </Flex>
          <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
            <Box w={{ base: "2xs", sm: "2xs", md: "lg" }}>
              <Text mb={2} lineHeight="1.2" fontSize="2xl">
                Reach Your Community
              </Text>
              <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
                See what events are happening around you. Get in touch with community organizations whenever you need help.
              </Text>
            </Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="online-community.png"
              ml={{ base: 2, md: 4, xl: 8 }}
              />
          </Flex>
        </VStack>

        {/* <Image mx={{ base: 0, md: 10, lg: 10, xl: 28 }} w={{ base: "0px", md: "0px", lg: "0px", xl: "200px" }} src="iphone.png" /> */}
        <Box mx={{ base: 0, md: 10, lg: 10, xl: 28 }}/>
        <VStack alignItems="flex-end">
          <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
            <Box w={{ base: "2xs", sm: "2xs", md: "lg" }}>
              <Text mb={2} lineHeight="1.2" fontSize="2xl">
                Earn Rewards
              </Text>
              <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
                Completing personal milestones and goals comes with rewards.
              </Text>
            </Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="rewards.png"
              mr={{ base: 2, md: 4, xl: 8 }}
              />
          </Flex>
          <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
            <Box w={{ base: "2xs", sm: "2xs", md: "lg" }}>
              <Text mb={2} lineHeight="1.2" fontSize="2xl" >
                Challenge Friends
              </Text>
              <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
                Invite friends or challenge others in your community to accomplish goals.
              </Text>
            </Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="friends.png"
              mr={{ base: 2, md: 4, xl: 8 }}
              />
          </Flex>
          <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} justifyContent="space-between" alignItems="flex-start">
            <Box w={{ base: "2xs", sm: "2xs", md: "lg" }} >
              <Text mb={2} lineHeight="1.2" fontSize="2xl" >
                Connect Your Apps
              </Text>
              <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
                Sync your progress with other apps (Fitbit, Apple Fit), as well as VR and AR games.
              </Text>
            </Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="user-interface.png"
              mr={{ base: 2, md: 4, xl: 8 }}
              />
          </Flex>
        </VStack>
      </Flex>
      <PrivacyFooter/>
    </Flex>

  )
}