import {Button,Stack, Textarea,Input, useColorModeValue} from '@chakra-ui/react';
import {motion} from 'framer-motion';

export default function Form(){

  const bg = useColorModeValue("#eee","#0D1C5E");

  return(
    <Stack spacing={5} boxShadow="xl" rounded="3xl" 
      w={{base:"350px",xl:"400px"}} h={{base:"480px",xl:"480px"}} 
      flexDir="column" alignItems="center" p={4} bg={"#5D38F1"}
      >
      <Input size="lg" boxShadow="md" rounded="3xl" variant="filled"  placeHolder="Name"/>
      <Input size="lg" boxShadow="md" rounded="3xl" variant="filled"  placeHolder="Email"/>
      <Textarea resize="none" size="lg" rows={10} boxShadow="md" rounded="3xl" variant="filled"  placeHolder="Message"/>
      <motion.button whileHover={{scale:1.05}}>
        <Button size="lg" boxShadow="md" rounded="full" _hover={{bg:"#eee"}} color="#0D1C5E" bg="#eee">
          Send
        </Button>
      </motion.button>
    </Stack>
  )
}