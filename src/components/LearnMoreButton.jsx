import {Flex,Button,Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

export default function LearnMoreButton(){
  const [contactHover,setContactHover] = React.useState(false);
  const textColor = "#EFECFE";
  return(
    <Flex p={5} onMouseOver={()=>setContactHover(true)} onMouseLeave={()=>setContactHover(false)} pt={5} alignItems="center" flexDirection="row">
    <Link to="/contact">
      <Box display="flex" flexDir="row" alignItems="center" color={textColor} boxShadow="dark-lg"  bg="#5D38F1" //5D38F1 3c4eff
        _hover={{bg:"#5D38F1"}} fontSize="xl" rounded="full" py={5} px={8}>
        Learn More
        <motion.div animate={contactHover ? {x:20}:{x:0}}>
          <ArrowForwardIcon mx={4}/>
        </motion.div>
      </Box>
    </Link>
  </Flex>
  )
}