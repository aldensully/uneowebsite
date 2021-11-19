import React, {useState} from 'react';
import {Flex,VStack,Box,Button,Heading,Text,Image} from '@chakra-ui/react';
import { motion } from 'framer-motion';



export default function AppFeatures(props){
  return(
    <Flex
      direction={{ base: "column", sm:"column", md: "column",lg:"row" }}
      wrap="no-wrap"
      minH="70vh"
      px={14}
      justifyContent="center"
      alignItems="center"
    >
      <VStack mt={20} mx={20} >
        <Flex h="3xs" maxW={{base:"xs",sm:"sm",md:"md",xl:"md"}} alignItems="flex-start">
          <Box minW="2xs">
            <Text fontSize="2xl" fontWeight="bold">
              Set Goals
            </Text>
            <Text lineHeight="1.2" fontSize="md">
              Set Goals and track progress on weight, physical activity, nutrition, mental health and more.
            </Text>
          </Box>
          <Image
            borderRadius="full"
            boxSize="70px"
            src="fitness.png"
            ml={8}
          />
        </Flex>
        <Flex h="3xs"  maxW={{base:"xs",sm:"sm",md:"md",xl:"md"}} alignItems="flex-start">
          <Box minW="2xs">
            <Text fontSize="2xl" fontWeight="bold">
            Find Resources
            </Text>
            <Text lineHeight="1.2" fontSize="md">
              Connect with community organizations, educators, wellness providers, and get access to transportation, fitness centers and food resources.
            </Text>
            <motion.button whileHover={{scale:1.1}}>
              <Box boxShadow="lg" p={2} mt={2} size="sm" mt={4} _hover={{bg:"#5D38F1"}} bg="#5D38F1" textColor="#EFECFE" rounded="full">Find Out More</Box>
            </motion.button>
          </Box>
          <Image
            borderRadius="full"
            boxSize="70px"
            src="natural-resources.png"
            ml={8}
          />
        </Flex>
        <Flex h="3xs" maxW={{base:"xs",sm:"sm",md:"md",xl:"md"}} alignItems="flex-start">
          <Box minW="2xs">
            <Text fontSize="2xl" fontWeight="bold">
              Reach Your Community
            </Text>
            <Text lineHeight="1.2" fontSize="md">
              See what events are happening around you. Get in touch with community leaders and organizations whenever you need help. 
            </Text>
          </Box>
          <Image
            borderRadius="full"
            boxSize="70px"
            src="online-community.png"
            ml={8}
          />
        </Flex>
      </VStack>

      <Box mx={{base:"0",md:"0",lg:"10",xl:"20"}} w={{base:"none",md:"0",xl:"250px"}} h={{base:"none",md:"0",xl:"250px"}}  rounded="3xl">
        <Image w={{base:"0px",md:"0px",xl:"250px"}} src="iphone.png"/>
      </Box>

      <VStack mt={20} mx={20} >
      <Flex  h="3xs" maxW={{base:"xs",sm:"sm",md:"md",xl:"md"}}  alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="rewards.png"
            mr={8}
          />
          <Box minW="2xs">
            <Text fontSize="2xl" fontWeight="bold">
              Earn Rewards
            </Text>
            <Text lineHeight="1.2" fontSize="md">
              With big accomplishments come big rewards. After completing personal milestones and goals, you will get rewards which can be traded for coupons, devices, and more.
            </Text>
          </Box>
        </Flex>
        <Flex h="3xs" maxW={{base:"xs",sm:"sm",md:"md",xl:"md"}} alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="friends.png"
            mr={8}
          />
          <Box minW="2xs">
            <Text fontSize="2xl" fontWeight="bold">
              Challenge Friends
            </Text>
            <Text lineHeight="1.2" fontSize="md">
              Invite friends or challenge others in your community to accomplish goals and win big.
            </Text>
          </Box>
        </Flex>
        <Flex h="3xs" maxW={{base:"xs",sm:"sm",md:"md",xl:"md"}} justifyContent="space-between" alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="user-interface.png"
            mr={8}
          />
          <Box minW="2xs" >
            <Text fontSize="2xl" fontWeight="bold">
              Connect Your Apps
            </Text>
            <Text lineHeight="1.2" fontSize="md">
              Uneo can sync your progress with other apps(Fitbit, Apple Fit), and has VR and AR support.
            </Text>
          </Box>
        </Flex>


      </VStack>
    </Flex>
  )
}