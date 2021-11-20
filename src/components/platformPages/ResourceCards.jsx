import { Flex, Text, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export default function ResourceCard(props) {
  const textColor = useColorModeValue("#eee", "#eee");

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Flex boxShadow="2xl" p={4} flexDir="column" alignItems="center" rounded="2xl" m={6} h={"xs"} w={"2xs"} color={textColor} bg={props.color}>
        <Image mt={-10} w="180px" src={props.image} />
        <Heading fontWeight="normal" fontSize="2xl">
          {props.title}
        </Heading>
        <Text mt={2} fontSize="lg">
          {props.text}
        </Text>
      </Flex>
    </motion.div>
  )
}