import { motion, useMotionValue, useTransform } from "framer-motion";
import {Flex,Box,Text,Heading,Image,Spacer} from '@chakra-ui/react';

export function ResourceCardRotate(props) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [-45, 45]);
  const rotateY = useTransform(x, [0, 400], [45, -45]);



    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY);
    }

    return (
      //           {/* <Flex  boxShadow="2xl" p={4} flexDir="column" alignItems="center" rounded="2xl" m={6} h={"xs"} w={"2xs"} bg={props.color}>

      // </Flex> */}
        <motion.div
        onMouseMove={handleMouse}
            style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "#fff",
                rotateX: rotateX,
                rotateY: rotateY
            }}
        >
          {/* <Image mt={-10} w="180px" src={props.image}/> */}
          {/* <Heading fontSize="2xl">
          {props.title}
          </Heading>
          <Text mt={2} fontSize="lg">
          {props.text}
          </Text> */}
        </motion.div>
    )
}