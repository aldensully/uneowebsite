import React, { Suspense } from "react"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  useColorModeValue
} from "@chakra-ui/react"
import LearnMoreButton from "./LearnMoreButton";

import Phone from "../fiber/Phone";
import Chart from "../fiber/Chart";
import { Canvas, useFrame } from '@react-three/fiber'

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
        w={{ base: "95%", sm: "60%", md: "60%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
          size="3xl"
          fontWeight="normal"
          textAlign={["center", "center", "left", "left"]}
          wordWrap="break-word"
        >
          {title1}
          <br />
          {title2}
        </Heading>
        <Heading
          opacity="0.9"
          fontSize={{ base: "sm", md: "lg", lg: "xl" }}
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>

        <LearnMoreButton />

      </Stack>

      <Box ml={{ base: "0%", md: "70px" }} w={{ base: "80%", sm: "40%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} />
      </Box>

    </Flex>
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
  title1: "Access Community Resources.",
  title2: "Reach Your Goals.",
  subtitle:
    "Connecting wellness experts, community organizations, and health providers to teens through a secure and user-friendly app.",
  image: "heroRender.png",
  ctaText: "Create your account now",
  ctaLink: "/signup",
}