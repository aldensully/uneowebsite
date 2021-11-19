import React from 'react';
import {Flex,Box,Button,VStack,Heading,Text, HStack,Stack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import ResourceCard from './ResourceCards';
import { ResourceCardRotate } from './ResourceCardRotate';

export default function PlatformResources(props){
  return(
    <Flex
      direction="column"
      wrap="no-wrap"
      minH="70vh"
      px={14}
      mb={40}
      mt={10}
      justifyContent="space-around"
      alignItems="center"
    >
        <Heading>Everything In One Place</Heading>
      <Flex mt={20} justifyContent="center" flexDir={{base:"column",  lg:"row"}} flexWrap="wrap" maxW="5xl">
        <ResourceCard image="mental-health.png" color="blue.400" title="Mental Health" text="Services for mental health and mindfulness." />
        <ResourceCard image="delivery.png" color="purple.600" title="Transportation" text="Free rides and discounts with Uber and Lyft." />
        <ResourceCard image="fitness.png" color="green.300" title="Fitness" text="Discounts for gym memberships and personal trainers." />
        <ResourceCard image="nutrition.png" color="orange.400" title="Nutrition" text="Access to meal plans and healthy food options in your area." />
        <ResourceCard image="spotlight.png" color="red.400" title="Community Events" text="Be the first to find out about community events and discover services near you." />
        <ResourceCard image="podcast.png" color="teal.400" title="Live Events and Podcasts" text="Access to exclusive live sessions and podcasts." />
      </Flex>
    </Flex>
  )
}