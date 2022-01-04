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
    <>
      <Flex mt="20" maxW="1200px" flexDir="row" align="center" justify="space-evenly">
        <Flex alignSelf="center" justifySelf="center" h="500px" w="50%">
          <Image bg="backgroundBlue" w="90%"/>
        </Flex>
        <Flex flexDir="column" w="50%">
          <Heading color="primaryBlack" fontWeight="regular" fontSize="48">
           Mapping The Journey 
          </Heading>
          <Text color="primaryBlack" opacity="80%" w="80%" mt="5" fontSize="16">
            Teens' often set goals for weight loss, reducing stress, and eating better.
            <br/>
            How can they leverage Uneo to set and reach that goal?
          </Text>
          <VStack spacing="8" mt="10">
            <Flex>
              <Flex color="white" alignSelf="center" alignItems="center" justifyContent="center" rounded="full" w="40px" h="40px" bg="primaryBlue">1</Flex>
              <Flex color="primaryBlack" ml="5" w="90%" flexDir="column">
                <Text fontSize="18" fontWeight="bold">Set The Goal With Milestones</Text>
                <Text fontSize="16" opacity="80%">Uneo provides for a selection of personalized goals that include achievable milestones.</Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex alignSelf="center" align="center" justify="center" color="white" rounded="full" w="40px" h="40px" bg="primaryBlue">2</Flex>
              <Flex ml="5" w="90%" flexDir="column">
                <Text fontSize="18" fontWeight="bold">Access Resources To Reach Those Goals</Text>
                <Text fontSize="16" opacity="80%">Uneo's personalized, curated online library of trused eduactional materials and community-based resources supports goal progress.</Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex align="center" justify="center" color="white" alignSelf="center" rounded="full" w="40px" h="40px" bg="primaryBlue">3</Flex>
              <Flex ml="5" w="90%" flexDir="column">
                <Text fontSize="18" fontWeight="bold">Receive Incentives And Motivation</Text>
                <Text fontSize="16" opacity="80%">Uneo leverages community-based incentives and appropriate gamification as well as carefully delivered reminders to the user reach their milestones.</Text>
              </Flex>
            </Flex>
            <Flex >
              <Flex align="center" justify="center" color="white" alignSelf="center" rounded="full" w="40px" h="40px" bg="primaryBlue">4</Flex>
              <Flex ml="5" w="90%" flexDir="column">
                <Text fontSize="18" fontWeight="bold">Connect With Providers To Gain Support</Text>
                <Text fontSize="16" opacity="80%">Uneo provides for a selection of personalized goals that include achievable milestones.</Text>
              </Flex>
            </Flex>

          </VStack>
        </Flex>
      </Flex>
    </>
  )
}