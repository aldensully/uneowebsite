import { Button, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from 'react';

export default function PrivacyFooter() {
  const [contactHover, setContactHover] = React.useState(false);
  const buttonTextColor = useColorModeValue("#eee", "#eee");

  return (
    <Flex onMouseOver={() => setContactHover(true)}
      onMouseLeave={() => setContactHover(false)} pt={5}
      alignItems="center" flexDirection="row" mb={5}>
      <Heading mr={4} fontWeight="normal" fontSize={{ base: "md", md: "xl" }} >
        Your privacy is our priority.
      </Heading>
      <Link to="/">
        <Button fontWeight="normal" color={buttonTextColor} alignItems="center" bg="orange.400" fontSize={{ base: "sm", md: "lg" }} _hover={{ bg: "green.400" }} rounded="full" >
          Privacy
          <motion.div animate={contactHover ? { x: 20 } : { x: 0 }}>
            <ArrowForwardIcon mx={4} />
          </motion.div>
        </Button>
      </Link>
    </Flex>
  )
}
