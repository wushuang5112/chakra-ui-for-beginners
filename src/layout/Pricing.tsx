import { Box, Flex, Text, Heading, Button, Icon, HStack, StackProps, Stack } from '@chakra-ui/react'
import React from 'react'
import { CheckIcon } from '../assets/icons/Icon'

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest} alignItems='start'>
            <Icon as={CheckIcon} mt='3px' fontSize='22px' w='22px' h='22px' />
            <Text textAlign={['left', 'left', 'right']}>{children}</Text>
        </HStack>
    )
}

function Pricing() {
    return (
        <Box mx='6'>
            <Box
                maxW='994px'
                margin='auto'
                mt='-64'
                borderRadius='xl'
                overflow='hidden'
                boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
                textAlign='center'>
                <Flex direction={{ base: 'column', lg: 'row' }}>
                    <Box textAlign='center' bg='#F0EAFB' p={{ base: '28px', sm: '60px' }}>
                        <Text fontSize='xl' fontWeight='extrabold'>Premium PRO</Text>
                        <Heading as='h3' fontSize={{ base: '5xl', lg: '6xl' }} mt='4'>$329</Heading>
                        <Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>billed just once</Text>
                        <Button
                            colorScheme='purple'
                            size='lg'
                            w={{ base: 'auto', sm: '282px' }}
                            mt='6'>Get Started</Button>
                    </Box>
                    <Box p={{ base: '32px', lg: '60px' }} fontSize='lg' bg='white'>
                        <Text textAlign='left'>
                            Access these features when you get this pricing package for your
                            business.
                        </Text>
                        <Stack as='ul' spacing='5' pt='6'>
                            <ListItem>Internation calling and messaging API. </ListItem>
                            <ListItem>Addtional phone numbers.</ListItem>
                            <ListItem>Automated message via Zapier.</ListItem>
                            <ListItem>24/7 support and consulting.</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Pricing