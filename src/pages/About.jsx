import { Box, Flex, SimpleGrid,Heading,Container,Text,Center,Button,Avatar,Stack,Image,Icon } from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

export default function About(props) {

  function MemberCard(props){
    return(
    <Center overflow="hidden" alignItems="space-between" py={6}>
      <Box
        maxW={'400px'}
        minW="400px"
        rounded={'md'}
        overflow={'hidden'}>
        <Flex justify={'center'}>
          <Image
            rounded="full"
            w={{base:"100px",md:"150px"}}
            h={{base:"100px",md:"150px"}}
            src={props.src}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={1} align={'center'} mb={5}>
            <Heading fontSize={18} fontWeight={"bold"} >
             {props.name} 
            </Heading>
            <Text fontSize={16} fontWeight="regular" opacity="80%" >{props.title}</Text>
          </Stack>
            <Flex justify="center" align="center"> 
              <a href={props.link}>
                <AiFillLinkedin size="30" />
              </a>
            <Text ml={2} color="primaryBlue">{props.advisor}</Text>
            </Flex>
        </Box>
      </Box>
    </Center>

    )
  }

  return (
    <Center id="about" p={10}>
      <Flex mt={{base:10,md:10}} maxW={1000} flexDir="column" justifyContent="center" alignItems="center">
        <Heading fontSize={{base:24,md:36}}>Our Team</Heading>
        <Text maxW={{base:"100%",sm:"80%",lg:"50%"}} mt={2} opacity="80%">Decades of healthcare, technology and community expertise shaping Uneo's journey.</Text>
        <SimpleGrid mt={10} columns={{base:1,sm:2,md:3}}>
          <MemberCard advisor="" name="Eric Sullivan" title="CEO, Founder" src="ericProfile.png" link="https://www.linkedin.com/in/eric-sullivan-5ab71218/"/>
          <MemberCard advisor="advisor" name="Dr. Paige Killian" title="CMO, Inovalon" src="paige.png" link="https://www.linkedin.com/in/paige-kilian-57b2798/" />
          <MemberCard advisor="advisor" name="Faisal Khalid" title="CTO, ProgenyHealth" src="faisal.jpg" link="https://www.linkedin.com/in/faisalf/" />
          <MemberCard advisor="advisor" name="Dr. Gordon Gao" title="Univ. Md, Smith School" src="gordon.jpg" link="https://www.linkedin.com/in/guodong-gordon-gao-8994887/" />
          <MemberCard advisor="advisor" name="Mike Burgin" title="CPO" src="mike.jpg" link="https://www.linkedin.com/in/mike-burgin-321b5b4/" />
          <MemberCard advisor="advisor" name="Tamika Cummings" title="The ONE Campaign" src="tamika.jpg" link="https://www.linkedin.com/in/mike-burgin-321b5b4/" />
        </SimpleGrid>
      </Flex>
    </Center>
  )
}