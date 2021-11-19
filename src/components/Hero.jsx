import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  useColorModeValue
} from "@chakra-ui/react"
import LearnMoreButton from "./LearnMoreButton";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {

  const accentTextColor = useColorModeValue("gray.400","gray.300");
  const [contactHover,setContactHover] = React.useState(false);

  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={8}
        w={{ base: "80%", md: "50%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="3xl"
          fontWeight="bold"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        
        <LearnMoreButton/>
        
      </Stack>

      <Box ml={{base:"0%", md:"40px"}} w={{ base: "80%", sm: "40%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="50%" rounded="1rem" shadow="2xl" />
      </Box>

    </Flex>
  )
}
 
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}
 
Hero.defaultProps = {
  title: "Access Community Resources to Reach Your Goals.",
  subtitle:
    "Connecting wellness experts, community organizations, and health providers to teens through a secure and user-friendly app.",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
}