import React,{useState,useEffect} from 'react';
import {Flex,Stack,Heading,Text,Box,Button,Image} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function ProviderPortal(){
  const words = ['community leaders','school systems','educators','organizers','wellness experts','youth groups','health plans','teens','the next generation'];
  const [index,setIndex] = useState(0);
  const [last,setLast] = useState(true);

  useEffect(() => {
    const interval = setInterval(()=>{
      setLast(!last);
      if(index < words.length-1){
        setIndex(index + 1);
      }
      else setIndex(0);
    },2000);
    return () => {
      clearInterval(interval);
    }
  }, [index])

  return(
    <Flex
    align="center"
    flexDir="column"
    justify={{ base: "center", md: "space-around", xl: "space-between" }}
    wrap="no-wrap"
    minH="70vh"
    px={8}
  >
    <Heading mt={20} fontSize="4xl">
      Provider Portal
    </Heading>

    <Stack
      spacing={{base:15,md:20,lg:64}}
      direction={{ base: "column", sm:"column", md: "column",lg:"row" }}
      align="center"
    >
      <Box w={{ base: "2xs", md: "xs", xl:"md" }}  h={{ base: "2xs", md: "xs", xl:"md" }}>
        <Image src="handshake-outline.png"/>
      </Box>
      <Flex w={{ base: "xs", md: "sm", xl:"lg" }} flexDir="column" maxW="2xl" alignItems="flex-start" >
        <Heading fontSize="5xl">
          Wondering How You Can Get Involved?
        </Heading>
        <Flex flexDir="row">
          <Box my={10}>
            <Link to="/contact">
              <motion.button whileHover={{scale:1.1}}>
                <Box display="flex" flexDir="row" alignItems="center" boxShadow="2xl"  bg="#5D38F1" 
                  fontSize="xl" rounded="full" py={4} px={8}>
                  Contact Us
                </Box>
              </motion.button>
            </Link>
          </Box>
          <Box ml={10} my={10}>
            <Link to="/contact">
              <motion.button whileHover={{scale:1.1}}>
                <Box display="flex" flexDir="row" alignItems="center" boxShadow="2xl"  bg="#F56565" 
                  fontSize="xl" rounded="full" py={4} px={8}>
                  Provider Portal
                </Box>
              </motion.button>
            </Link>
          </Box>
        </Flex>
      </Flex>
      </Stack>


      <Flex mb={10} w="350px" alignItems="center" flexDir="column" >
        <Heading>
          Uneo supports
        </Heading>

        {last ?
        <motion.div
        initial={{scale:0.5}}
        animate={{scale:1}}
        >
          <Heading fontSize="4xl" color="#20CCC1"  >
            {words[index]}
          </Heading>
        </motion.div>
        :
        <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        >
          <Heading fontSize="4xl" color="#20CCC1"  >
            {words[index]}
          </Heading>
        </motion.div>
        }
      </Flex>
    </Flex>
  )
}