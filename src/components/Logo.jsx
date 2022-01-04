import { Image, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logo(props) {
    return (
        <a href="#home">
            <Flex alignItems="center" >
                <Image m={1} w="40px" src="logo_black.png"/>
                <Heading fontSize="18" ml={2} >
                    Uneo
                </Heading>
            </Flex>
        </a>
    )
}