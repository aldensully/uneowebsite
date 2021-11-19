import {Flex,Box,Text,Heading,Image,Spacer} from '@chakra-ui/react';
import { motion,useMotionValue,useTransform } from 'framer-motion';


export default function ResourceCard(props){
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  function handleMouse(event) {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  return(
    <motion.div whileHover={{scale:1.1}}>
      <Flex boxShadow="2xl" p={4} flexDir="column" alignItems="center" rounded="2xl" m={6} h={"xs"} w={"2xs"} bg={props.color}>
        <Image mt={-10} w="180px" src={props.image}/>
        <Heading fontSize="2xl">
          {props.title}
        </Heading>
        <Text mt={2} fontSize="lg">
          {props.text}
        </Text>
      </Flex>
    </motion.div>
  )
}