import { Box, Flex, Text, Heading, Button, Icon, HStack, StackProps, Stack } from '@chakra-ui/react'
import React from 'react'
import { CheckIcon } from '../assets/icons/Icon'

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} fontSize='22px' w='22px' h='22px' />
            <Text>{children}</Text>
        </HStack>
    )
}

function Pricing() {
    return (
        <Box
            maxW='994px'
            margin='auto'
            mt='-256px'
            borderRadius='12px'
            boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
            overflow='hidden'>
            <Flex>
                <Box textAlign='center' bg='#F0EAFB' p='60px'>
                    <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
                    <Heading as='h3' fontSize='60px' mt='16px'>$329</Heading>
                    <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
                    <Button colorScheme='purple' size='lg' w='282px' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text textAlign='left'>
                        Access these features when you get this pricing package for your
                        business.
                    </Text>
                    <Stack as='ul' spacing='20px' pt='24px'>
                        <ListItem>Internation calling and messaging API. </ListItem>
                        <ListItem>Addtional phone numbers.</ListItem>
                        <ListItem>Automated message via Zapier.</ListItem>
                        <ListItem>24/7 support and consulting.</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Pricing