import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  Container
} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons';

function gback(){
  return(
    <Box bgGradient="linear(to-b,#FFF6F5,#FBEDFF)">
      <Box position="absolute" rounded="full" w="200" h="200" ml="100" mt="200" bg="#ffd6eb"/>
      <Box position="relative" zIndex="2" bgGradient="linear(to-b,#FFF6F5,#FBEDFF)"w="100%" h="100vh">
      </Box>
    </Box>
  )
}

export default function Hero({
  title1,
  title2,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {

  return (
    <Container
      id="home"
      p={8}
      maxW="1200"
    >
      <Flex
        flexDir={{base:"column",sm:"column",md:"row",lg:"row"}}
        justify={{md:"center",lg:"space-between"}}
        mt={20}
        align={{sm:"center",md:"center"}}
      >
        <Flex w={{md:"100%",lg:"50%"}} flexDir="column" justifyContent="center" >
        <Heading
          fontSize={{base:"24",md:"36",lg:"56"}}
          fontWeight="bold"
          color="#2E2E36"
          wordWrap="break-word"
          w={{base:"100%",sm:"50%",md:"60%",lg:"100%"}}
        >
          {title1}
        </Heading>
        <Text
          color="primaryBlack"
          mt="5"
          opacity="0.8"
          fontSize="18"
          fontWeight="bold"
          w="90%"
          textAlign="flex-start"
        >
          {subtitle}
        </Text>

      <Flex mt="10" alignSelf={{base:"center",lg:"flex-start"}}>
        <a style={{backgroundColor:"primaryBlue",width:"fit-content"}} href="#platform">
          <Flex
          fontSize="18"
          bg="primaryBlue" color="white" rounded="full"
          px={12} py="4" 
          justify="center"
          alignItems="center" flexDir="row">
            Learn More
          </Flex>
        </a>
      </Flex>
      </Flex>

      <Box rounded="50" w={{sm:"60%",md:"60%",lg:"45%"}} p={10} align="center" justify="center">
          <Image src={image} />
        </Box>

      </Flex>

    </Container>
  )
}

Hero.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

Hero.defaultProps = {
  title1: "Designed by Teens - Used by Teens to Be and Stay Well",
  subtitle: "A personalized, engaging community where teens can set and reach their goals - supported with resources they can trust. ",
  image: "hero_placeholder.png",
  ctaText: "Create your account now",
  ctaLink: "/signup",
}