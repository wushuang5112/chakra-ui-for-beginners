import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Heading, Box, Text, Button } from '@chakra-ui/react'

function App() {
    return (
        <div className="App">
            <Box
                h="300px"
                w="300px"
                margin="auto"
                mt="32px"
                bg="green">
                <Text fontSize='32px'>This is a style props example.</Text>
            </Box>
        </div>
    )
}

export default App
