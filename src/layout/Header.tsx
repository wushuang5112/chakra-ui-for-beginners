import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

function Header() {
    return (
        <Box pb='28' as='section'>
            <Box
                color='gray.50'
                bg='purple.600'
                pt='90px'
                pb='198px'
                px='8'
                textAlign='center'>
                <Heading
                    fontWeight='extrabold'
                    fontSize='5xl'>Simple pricing for your business</Heading>
                <Text
                    fontWeight='medium'
                    pt='4'
                    fontSize='2xl'>Plans that are carefully crafted to suit your business.</Text>
            </Box>
        </Box>
    )
};

export default Header
