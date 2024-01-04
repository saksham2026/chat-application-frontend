import React from 'react'
import { Container, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import Signup from '../Components/Signup';
import Login from '../Components/Login';
const Homepage = () => {
    return (
        <div className='homepage-container'>
            <Container paddingTop="100px" minW="2xl" minH="3xl" centerContent>
                <Box
                    borderRadius="10px"
                    width="100%"
                    border="1px"
                    borderColor="black"
                    d="flex"
                    mb="10px"
                    backgroundColor="white"
                >
                    <Text
                        fontSize="4xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        YOUR CHAT
                    </Text>
                </Box>
                <Box width="100%" border="1px" borderColor="black" borderRadius="8px" backgroundColor="white" padding="10px">
                    <Tabs variant='soft-rounded' isFitted colorScheme='blue'>
                        <TabList>
                            <Tab>Login</Tab>
                            <Tab>SignUp</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login/>
                            </TabPanel>
                            <TabPanel>
                                <Signup/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        </div>
    )
}

export default Homepage;
