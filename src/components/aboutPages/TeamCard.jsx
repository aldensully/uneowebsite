import { Flex, Image, Heading, Text, useColorModeValue, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function TeamCard(props) {
  const textColor = useColorModeValue('#020413', '#eee');
  const bg = useColorModeValue("#fff", "#040825");
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Flex bg={bg} color={textColor} p={4} h={{ base: "275px", md: "300px" }} rounded="xl" boxShadow="xl" justifyContent="center" alignItems="center" flexDir="column" >
        <Image src={props.image} boxSize={{ base: "120px", md: "150px" }} rounded="full" />
        <Flex alignItems="center" textAlign="center" flexDir="column" mt={4}>
          <Heading color={textColor} fontSize={{ base: "xl", md: "2xl" }}>{props.name}</Heading>
          <Text color={textColor} fontSize={{ base: "sm", md: "md" }} mb={2}>{props.title}</Text>
          <Flex alignItems="center" flexDir="row">
            <Link to={props.link} isExternal>
              <AiFillLinkedin color={textColor} size="30" />
            </Link>
            {props.advisor ?
              <Badge ml={2} bg="transparent" colorScheme="purple">Advisor</Badge>
              :
              null}
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  )
}