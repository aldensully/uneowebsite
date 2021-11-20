import { Flex, Heading } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { EmailIcon } from "@chakra-ui/icons";
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Info() {
  return (
    <Flex mb={10} alignSelf="center" flexDir="column" alignItems="center">
      <Heading fontWeight="normal" fontSize="5xl" my={8}>
        Contact Us
      </Heading>
      <Flex flexDir="column" alignItems="flex-start">
        <Flex my={4} flexDir="row" alignItems="center">
          <PhoneIcon color="#5D38F1" mx={4} />
          410-440-8104
        </Flex>
        <Flex flexDir="row" alignItems="center">
          <EmailIcon color="#5D38F1" mx={4} />
          esullivan9541@gmail.com
        </Flex>
        <Flex mt={10} alignSelf="center" flexDir="row" alignItems="center">
          <AiOutlineFacebook size="36" />
          <AiOutlineInstagram size="36" />
          <AiOutlineLinkedin size="36" />
        </Flex>
      </Flex>
    </Flex>
  )
}