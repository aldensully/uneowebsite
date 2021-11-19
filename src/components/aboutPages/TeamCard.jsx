import {Flex, Image,Heading,Text, useColorModeValue, Badge} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {AiFillLinkedin} from 'react-icons/ai';
import {motion} from 'framer-motion';

export default function TeamCard(props){
  const textColor = useColorModeValue('#fff','#fff');
  return(
    <motion.div whileHover={{scale:1.1}}>
      <Flex bg="#040A30" p={4} h="300px" rounded="xl" boxShadow="xl" justifyContent="center" alignItems="center"  flexDir="column" >
        <Image src={props.image} boxSize="150px" rounded="full"/>
        <Flex alignItems="center" textAlign="center" flexDir="column" mt={5}>
          <Heading color={textColor} fontSize="2xl">{props.name}</Heading>
          <Text color={textColor} mb={2}>{props.title}</Text>
          <Link to={props.link} isExternal>
            <AiFillLinkedin color={textColor} size="30"/>
          </Link>
        </Flex>
        {props.advisor ?
        <Badge colorScheme="purple">Advisor</Badge>
        :
        null}
      </Flex>  
    </motion.div>
  )
}