import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Text, HStack, Heading, Box } from '@chakra-ui/react'

interface FeatureProps {
    title: string;
    desc: string;
}

function Feature({ title, desc, ...rest }: FeatureProps) {
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

function StackEx() {
    return (
        <HStack spacing={8}>
            <Feature
                title='Plan Money'
                desc='The future can be even brighter but a goal without a plan is just a wish'
            />
            <Feature
                title='Save Money'
                desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
            />
        </HStack>
    )
}


function App() {
    return (
        <div className="App">
            <StackEx />
        </div>
    )
}

export default App

// Example 2
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

function App() {
    return (
        <div className="App">
            <HStack spacing='24px'>
                <Box w='40px' h='40px' bg='yellow.200'>
                    1
                </Box>
                <Box w='40px' h='40px' bg='tomato'>
                    2
                </Box>
                <Box w='40px' h='40px' bg='pink.100'>
                    3
                </Box>
            </HStack>
        </div>
    )
}

export default App
*/

// example 3
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <VStack spacing='24px'>
        <Box w='40px' h='40px' bg='yellow.200'>
          1
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
          2
        </Box>
        <Box w='40px' h='40px' bg='pink.100'>
          3
        </Box>
      </VStack>
    </div>
  )
}

export default App

*/

