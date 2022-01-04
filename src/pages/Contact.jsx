import {
  Container,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  InputLeftElement,
  Input,
  FormControl,
  FormLabel,
  Button,
  Box,
  VStack,
  InputGroup,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon} from '@chakra-ui/icons';
export default function contact() {
  return (
    <Container h="100vh" p={10} id="contact" maxW="1000" mt={0} centerContent overflow="hidden">
      <Heading mt={{base:10,md:20}}>Get In Touch</Heading>
      <Flex align="center" justify="space-between" mt={{base:10,md:20}} flexDir={{base:"column",sm:"column",md:"row"}}>
        <Flex spacing={5} w={{base:"100%",sm:"80%",md:"45%"}} direction="column">
          <Text fontWeight="bold" fontSize={24} color="primaryBlue">Community-Based Organizations, Healthcare Providers, Health Plans</Text>
          <Text mt={5} color="primaryBlack" opacity="80%">Uneo's journey is fast-paced but is making a difference. If you want to learn more about how you or your organization can join the Uneo platform, you can directly contact Eric Sullivan or subscribe to the newsletter.</Text>
          <Stack mt={10} alignSelf={{base:"center",md:"flex-start"}} spacing={10} direction={"column"}>
          <Flex align="center" >
            <PhoneIcon color="primaryBlue"/>
            <Text color="primaryBlack" opacity="80%" ml={4}>410-440-8104</Text>
          </Flex>
          <Flex align="center">
            <EmailIcon color="primaryBlue"/>
            <Text color="primaryBlack" opacity="80%" ml={4}>esullivan@uneo.one</Text>
          </Flex>
          </Stack>
        </Flex>
            <Box id="newsletter" mt={{base:10,sm:10,md:0}} w={{base:"100%",sm:"80%",md:"45%"}} bg="backgroundBlue" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={{base:5,md:10}}>
                      <Heading color="primaryBlack" fontSize={{sm:"16",md:"18"}}>Subscribe to Our Newsletter</Heading>
                      <FormControl id="name">
                        <FormLabel color="primaryBlack" opacity="80%">Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                          />
                          <Input type="text" size="lg" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel color="primaryBlack" opacity="80%">Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                          />
                          <Input type="text" size="lg" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          w="100%"
                          variant="solid"
                          size="lg"
                          bg="primaryBlue"
                          color="white"
                          _hover={{}}>
                            Subscribe
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
      </Flex>
      <Text mt={56} fontSize="14" >Copyright 2022 Uneo Inc</Text>
    </Container>
  );
}