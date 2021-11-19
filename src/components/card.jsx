import React from 'react';
import {Box,Text} from '@chakra-ui/react';

export default function Card(props){
    return(
        <Box w="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Text>
                {props.title}
                </Text>
        </Box>
    )
}