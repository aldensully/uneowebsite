import { Button, Stack, Textarea, Input, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Form() {

  const bg = useColorModeValue("#fff", "#5D38F1");
  const focusColor = useColorModeValue("#5D38F1", "#5D38F1");
  const textColor = useColorModeValue('#020413', '#eee');

  return (
    <Stack spacing={5} boxShadow="2xl" rounded="3xl"
      w={{ base: "250px", sm: "350px", xl: "400px" }} h={{ base: "340px", xl: "480px" }}
      flexDir="column" alignItems="center" p={4} bg={bg} color={textColor}
    >
      <Input focusBorderColor={focusColor} size="lg" boxShadow="md" rounded="3xl" variant="filled" placeHolder="Name" />
      <Input focusBorderColor={focusColor} size="lg" boxShadow="md" rounded="3xl" variant="filled" placeHolder="Email" />
      <Textarea focusBorderColor={focusColor} resize="none" size="lg" rows={10} boxShadow="md" rounded="3xl" variant="filled" placeHolder="Message" />
      <motion.button whileHover={{ scale: 1.05 }}>
        <Button size="lg" bg={"#5D38F1"} boxShadow="md" rounded="full" color="#fff" fontWeight="normal"  >
          Send
        </Button>
      </motion.button>
    </Stack>
  )
}