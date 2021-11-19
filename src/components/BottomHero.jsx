import React from 'react';
import {Flex,Box,Text,Stack,Heading,useColorModeValue} from '@chakra-ui/react';
import { motion } from "framer-motion"
import SolutionMini from '../fiber/SolutionMini';
import DataMini from '../fiber/DataMini';
import ConsumerMini from '../fiber/ConsumerMini';

export default function BottomHero(props){
  const cardBg = useColorModeValue("#eee","#222");
  const textColor = useColorModeValue("#222","eee")
  return(

    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      mt={10}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        spacing={{base:"4", md:"8", lg:"10"}}
        direction={{base:"column", md:"column", lg:"row"}}
        w={{ base: "80%", md: "50%" }}
        justifyContent="center"
        alignItems="center"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Flex p={5} alignItems="center" rounded="xl" 
            w={{base:"400px",md:"450px",lg:"360px"}} 
            height={{base:"200px",md:"200px",lg:"450px"}} 
            bg="transparent" border="1px solid gray" flexDirection="column"
            color={textColor}
          >
            <Box h="45%">
              <SolutionMini/>
            </Box>

            <Text alignSelf="flex-start" fontSize="2xl" fontWeight="bold">
              Solutions
            </Text>
            <Box alignSelf="flex-start" m={2} width="30%" height="2px" bg="green.300"></Box>

            <Text>
              We work with developers, from product ideation to solution execution
            </Text>
          </Flex>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Flex textAlign="center" p={5} alignItems="center" rounded="xl" 
            w={{base:"400px",md:"450px",lg:"360px"}} 
            height={{base:"200px",md:"200px",lg:"450px"}}  
            color={textColor}
            bg="transparent" border="1px solid gray" flexDirection="column" 
          >
            <Box h="45%">
              <DataMini/>
            </Box>
            <Text alignSelf="flex-start" fontSize="2xl" fontWeight="bold">
              Data and Analytics
            </Text>
            <Box alignSelf="flex-start" m={2} width="30%" height="2px" bg="green.300"></Box>
            <Text alignSelf="flex-start">
              We work with developers, from product ideation to solution execution
            </Text>
          </Flex>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Flex p={5} alignItems="center" rounded="xl" 
            w={{base:"400px",md:"450px",lg:"360px"}} 
            height={{base:"200px",md:"200px",lg:"450px"}}  
            color={textColor}
            bg="transparent" border="1px solid gray" flexDirection="column"
          >
            <Box h="45%">
              <ConsumerMini/>
            </Box>
            <Text alignSelf="flex-start" fontSize="2xl" fontWeight="bold">
              Consumer Engagement
            </Text>
            <Box alignSelf="flex-start" m={2} width="30%" height="2px" bg="green.300"></Box>
            <Text>
            We help our customers identify and test the most feasible and innovative solutions to engage consumers.
            </Text>
          </Flex>
        </motion.button>
      </Stack>
    </Flex> 
    )
}