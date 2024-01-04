import React from 'react'
import { useState } from 'react';
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);

    function sumbitHandler() {

    }

    return (
        <div className='signup-container'>
            <VStack spacing="8px">
                <FormControl id='name' isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Enter Your Name'
                        onChange={(event) => { setName(event.target.value) }}
                    />

                </FormControl>
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
                <FormControl id='confirmPassword' isRequired>
                    <FormLabel>Confirm</FormLabel>
                    <InputGroup>
                        <Input placeholder='Confirm Password'
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
                <FormControl
                    id='image'
                    isRequired>
                    <FormLabel>Upload Your Picture</FormLabel>
                    <Input type='file'
                        p={1.5}
                        accept='image/*'
                        onChange={(event) => { postDetails(e.target.files[0]) }}
                    />
                </FormControl>

                <Button
                    colorScheme='blue'
                    width="100%"
                    style={{ marginTop: 15 }}
                    onClick={sumbitHandler}>
                        Signup
                </Button>

            </VStack>
        </div>
    )
}

export default Signup;
