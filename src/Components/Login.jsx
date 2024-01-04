import React from 'react'
import { useState } from 'react';
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    function sumbitHandler() {

    }

    return (
        <div>
            <VStack spacing="10px">
                <FormControl id='email' isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter Your Email'
                        onChange={(event) => { setEmail(event.target.value) }}
                    />

                </FormControl>
                <FormControl id='password' isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter Password'
                            type={show ? "text" : "password"}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <InputRightElement width="4.5rem" >
                            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                </FormControl>
                <Button
                    colorScheme='blue'
                    width="100%"
                    style={{ marginTop: 15 }}
                    onClick={sumbitHandler}>
                        Login
                </Button>

            </VStack>
        </div>
    )
}

export default Login;
