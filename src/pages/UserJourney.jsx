import { Container,Flex,VStack, Box, Image, Heading, SimpleGrid, Text, Stack, HStack, useColorModeValue } from '@chakra-ui/react';

function JourneyBox(props){
  return(
    <Flex flexDir="column" justifyContent="center" mt={props.mt} w="400px" h="300px" >
      <Heading fontSize="24" fontWeight="bold">{props.title}</Heading>
      <Text fontSize="16" fontWeight="normal">{props.body}</Text>
    </Flex>
  )
}

export default function UserJourney(){
  return(
    <Box pb={20} bg="backgroundBlue" w="100%">
    <Container p={10} maxW="1200px" centerContent w="full">
      <Stack spacing={20} mt="20" flexDir={{base:"column",md:"column",lg:"row"}} align="center" justify="space-between">
        <Flex alignSelf="center" justifySelf="center">
          {/* <Box ml={-15} mt={-10} position="absolute" transform="rotate(-5deg)" rounded={50} w={{base:"250px",md:"350px"}} h={{base:"250px",md:"350px"}} zIndex={3} bg="backgroundBlue"/> */}
          <Box ml={-15} mt={-10} position="absolute" transform="rotate(5deg)" rounded={50} w={{base:"150px",md:"250px"}} h={{base:"150px",md:"250px"}} filter="blur(100px)" zIndex={2} bg="highlightPurple"/>
          <Image zIndex={4} src="kid_on_phone.png" rounded="50" h={{base:"200px",md:"300px",lg:"400px"}} w={{base:"200px",md:"300px",lg:"400px"}} />
        </Flex>
        <Flex flexDir="column" w={{md:"100%",lg:"50%"}}>
          <Heading color="primaryBlack" fontWeight="regular" fontSize={{base:24,md:36}}>
           Mapping The Journey 
          </Heading>
          <Text color="primaryBlack" opacity="80%" w="80%" mt="5" fontSize="16">
            Teens' often set goals for weight loss, reducing stress, and eating better.
            <br/>
            How can they leverage Uneo to set and reach that goal?
          </Text>
          <VStack spacing="8" mt="10">
            <Flex>
              <Flex alignSelf="center" alignItems="center" justifyContent="center" rounded="full" w="10" h="10" color="white" bg="primaryBlue">1</Flex>
              <Flex color="primaryBlack" ml="5" w="90%" flexDir="column">
                <Text fontSize={{base:"16",md:"18"}} fontWeight="bold">Set The Goal With Milestones</Text>
                <Text fontSize="16" opacity="80%">Uneo provides for a selection of personalized goals that include achievable milestones.</Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex alignSelf="center" align="center" justify="center" rounded="full" w="10" h="10" bg="primaryBlue" color="white">2</Flex>
              <Flex ml="5" w="90%" flexDir="column">
                <Text fontSize={{base:16,md:18}} fontWeight="bold">Access Resources To Reach Those Goals</Text>
                <Text fontSize="16" opacity="80%">Uneo's personalized, curated online library of trused eduactional materials and community-based resources supports goal progress.</Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex align="center" justify="center" alignSelf="center" rounded="full" w="10" h="10" color="white" bg="primaryBlue">3</Flex>
              <Flex ml="5" w="90%" flexDir="column">
                <Text fontSize={{base:16,md:18}} fontWeight="bold">Receive Incentives And Motivation</Text>
                <Text fontSize="16" opacity="80%">Uneo leverages community-based incentives and appropriate gamification as well as carefully delivered reminders to the user reach their milestones.</Text>
              </Flex>
            </Flex>
            <Flex >
              <Flex align="center" justify="center" alignSelf="center" rounded="full" w="10" h="10" color="white" bg="primaryBlue">4</Flex>
              <Flex ml="5" w="90%" flexDir="column">
                <Text fontSize={{base:16,md:18}} fontWeight="bold">Connect With Providers To Gain Support</Text>
                <Text fontSize="16" opacity="80%">Uneo provides for a selection of personalized goals that include achievable milestones.</Text>
              </Flex>
            </Flex>

          </VStack>
        </Flex>
      </Stack>
    </Container>
    </Box>
  )
}