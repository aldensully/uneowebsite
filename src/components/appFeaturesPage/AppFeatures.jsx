import React from 'react';
import { Flex, VStack, Box, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';



export default function AppFeatures(props) {
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      justifyContent="center"
      alignItems="center"
    >
      <VStack alignItems="center" mt={20}  >
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
              Connect with community organizations, educators, wellness providers, and get access to transportation, fitness centers and food resources.
            </Text>
            <motion.button whileHover={{ scale: 1.1 }}>
              <Box boxShadow="lg" fontSize={{ base: "xs", md: "md" }} p={2} mt={2} size="sm" mt={4} _hover={{ bg: "#5D38F1" }} bg="#5D38F1" textColor="#EFECFE" rounded="full">Learn More</Box>
            </motion.button>
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
              See what events are happening around you. Get in touch with community leaders and organizations whenever you need help.
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

      <Image mx={{ base: 0, md: 10, lg: 10, xl: 28 }} w={{ base: "0px", md: "0px", lg: "0px", xl: "200px" }} src="iphone.png" />

      <VStack alignItems="flex-end" mt={20} >
        <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="rewards.png"
            mr={{ base: 2, md: 4, xl: 8 }}
          />
          <Box w={{ base: "2xs", sm: "2xs", md: "lg" }}>
            <Text mb={2} lineHeight="1.2" fontSize="2xl">
              Earn Rewards
            </Text>
            <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
              After completing personal milestones and goals, you will get rewards which can be traded for coupons, devices, and more.
            </Text>
          </Box>
        </Flex>
        <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="friends.png"
            mr={{ base: 2, md: 4, xl: 8 }}
          />
          <Box w={{ base: "2xs", sm: "2xs", md: "lg" }}>
            <Text mb={2} lineHeight="1.2" fontSize="2xl" >
              Challenge Friends
            </Text>
            <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
              Invite friends or challenge others in your community to accomplish goals and win big.
            </Text>
          </Box>
        </Flex>
        <Flex h="3xs" maxW={{ base: "xs", sm: "sm", md: "xs", lg: "xs", xl: "sm" }} justifyContent="space-between" alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="user-interface.png"
            mr={{ base: 2, md: 4, xl: 8 }}
          />
          <Box w={{ base: "2xs", sm: "2xs", md: "lg" }} >
            <Text mb={2} lineHeight="1.2" fontSize="2xl" >
              Connect Your Apps
            </Text>
            <Text lineHeight="1.2" fontSize={{ base: "md", xl: "lg" }}>
              Uneo can sync your progress with other apps(Fitbit, Apple Fit), and has VR and AR support.
            </Text>
          </Box>
        </Flex>


      </VStack>
    </Flex>
  )
}