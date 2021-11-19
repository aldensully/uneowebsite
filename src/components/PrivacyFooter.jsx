import { Button,Flex,Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from 'react';

export default function PrivacyFooter(){
  const [contactHover,setContactHover] = React.useState(false);
  return(
    <Flex onMouseOver={()=>setContactHover(true)} 
    onMouseLeave={()=>setContactHover(false)} pt={5} 
    alignItems="center" flexDirection="row">
    <Heading mr={4} fontSize="xl" >
    Your privacy is our priority.
    </Heading>
    <Link to="/">
      <Button alignItems="center" bg="orange.400" _hover={{bg:"green.400"}} rounded="full" >
        Privacy & Security
        <motion.div animate={contactHover ? {x:20}:{x:0}}>
          <ArrowForwardIcon mx={4}/>
        </motion.div>
      </Button>
    </Link>
  </Flex>
  )
}
