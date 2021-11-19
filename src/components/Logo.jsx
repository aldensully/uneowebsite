import { Text,Box,Image,Flex,Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logo(props){
    return(
        <Link to="/">
            <Flex alignItems="center" fontSize="2xl" fontWeight="bold">
                <Image m={1} w="50px"  src="uneoLogo2_transparent_256.png"/>
                <Heading fontSize="2xl" ml={2} >
                    Uneo 
                </Heading>
            </Flex>
        </Link>
    )
}