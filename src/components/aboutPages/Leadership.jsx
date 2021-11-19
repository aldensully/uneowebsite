import { SimpleGrid,Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import TeamCard from './TeamCard';

export default function Leadership(){
  const textColor = useColorModeValue('#fff','#fff');

  return(
    <Flex mt={10}  overflow="hidden" /*w={{base:"2xl",xl:"4xl"}}*/ w="100%"  alignItems="center"  flexDir="column">
      
      <Flex  mt={20} alignItems="center" flexDir='column' w="xl">
        <Heading color={textColor}  fontSize="2xl">
          Our Team
        </Heading>
        <Flex alignSelf="center" m="4" w={{base:"xs",xl:"xl"}} h="2px" bgColor="#5D38F1"/>
      </Flex>
      

      {/* <Flex mt={20} alignSelf="center" justifyContent="center" alignItems="center" flexDir='row' w="xl">
        <Flex alignSelf="center" m="4" w={{base:"50px",xl:"75px"}} h="1px" bgColor="#5D38F1"/>
        <Heading color={textColor}   fontSize="2xl">
        Advisory Team
        </Heading>
        <Flex alignSelf="center" m="4" w={{base:"50px",xl:"75px"}} h="1px" bgColor="#5D38F1"/>
      </Flex> */}

      <SimpleGrid spacingX={5} spacingY={10} m={20} columns={{base:1,md:2,xl:3}}  >
        <TeamCard name="Eric Sullivan" image="ericProfile.png" title="CEO, Founder" link="https://www.linkedin.com/in/eric-sullivan-5ab71218/" />
        <TeamCard advisor={true} name="Titi Ogunmakinwa" image="titi.png" title="American Diabetes Association" link="https://www.linkedin.com/in/titilayo-ogunmakinwa-055b9153/" />
        <TeamCard advisor={true}  name="Dr. Paige Killian" image="paige.png" title="CMO, Inovalon" link="https://www.linkedin.com/in/paige-kilian-57b2798/" />
        <TeamCard advisor={true}  name="Faisal Khalid" image="faisal.jpg" title="CTO, ProgenyHealth" link="https://www.linkedin.com/in/faisalf/" />
        <TeamCard advisor={true}  name="Dr. Gordon Gao" image="gordon.jpg" title="Univ. Md, Smith School" link="https://www.linkedin.com/in/guodong-gordon-gao-8994887/" />
        <TeamCard advisor={true}  name="Mike Burgin" image="mike.jpg" title="CPO" link="https://www.linkedin.com/in/mike-burgin-321b5b4/" />
        <TeamCard advisor={true}  name="Adam Radziszewski," image="adam.jpg" title="Product Design, ConsejoSano" link="https://www.linkedin.com/in/radziszewski/" />
      </SimpleGrid>
    </Flex>
  )
}