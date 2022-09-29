import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Heading, Box, Text, Button } from '@chakra-ui/react'

function App() {
    return (
        <div className="App">
            <Box maxW='32rem'>
                <Heading mb={4}>Modern online and offline payments for Africa</Heading>
                <Text fontSize='xl'>
                    Paystack helps businesses in Africa get paid by anyone, anywhere in the
                    world
                </Text>
                <Button size='lg' colorScheme='green' mt='24px'>
                    Create a free account
                </Button>
            </Box>
            <Heading mb={4}>
                Basic text writing, including headings, body text, lists, and more.
            </Heading>
            <Heading>I'm a Heading</Heading>
            <Heading as='h1' size='4xl' noOfLines={1}>
                (4xl) In love with React & Next
            </Heading>
            <Heading as='h2' size='3xl' noOfLines={1}>
                (3xl) In love with React & Next
            </Heading>
            <Heading as='h2' size='2xl'>
                (2xl) In love with React & Next
            </Heading>
            <Heading as='h2' size='xl'>
                (xl) In love with React & Next
            </Heading>
            <Heading as='h3' size='lg'>
                (lg) In love with React & Next
            </Heading>
            <Heading as='h4' size='md'>
                (md) In love with React & Next
            </Heading>
            <Heading as='h5' size='sm'>
                (sm) In love with React & Next
            </Heading>
            <Heading as='h6' size='xs'>
                (xs) In love with React & Next
            </Heading>
        </div>
    )
}

export default App
