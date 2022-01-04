import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

export default function LearnMoreButton() {
  const [contactHover, setContactHover] = React.useState(false);
  const textColor = "#EFECFE";

  return (
    <Flex pt={5} alignItems="center" flexDirection="row">
      <Link to="/platform">
        <Box onMouseOver={() => setContactHover(true)} onMouseLeave={() => setContactHover(false)} display="flex"
          flexDir="row" alignItems="center" color={textColor} boxShadow="2xl" bg="#5D38F1"
          _hover={{ bg: "#5D38F1" }} fontSize={{ base: "md", md: "xl" }} borderRadius="5"  
          py={{ base: 3, md: 4 }} px={{ base: 4, md: 6 }}>
          Learn More
          <motion.div animate={contactHover ? { x: 20 } : { x: 0 }}>
            <ArrowForwardIcon mx={4} />
          </motion.div>
        </Box>
      </Link>
    </Flex>
  )
}