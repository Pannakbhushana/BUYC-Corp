import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,useColorModeValue,} from '@chakra-ui/react';
import { useState } from 'react';

const initState={
    email:"",
    password:"",
    isDealer:false
}
  
  export default function Login() {
    const [formState, setFormState]=useState(initState)
    const {email,password,isDealer}=formState;

    const handleChange=(e)=>{
        if(e.target.name=='isDealer'){
            setFormState({...formState, [e.target.name]:true});
        }
        else{
        setFormState({...formState, [e.target.name]:e.target.value})
        }
      
    }

    const handleSubmit=(e)=>{
        console.log(formState)
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={handleChange} />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={handleChange} />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox value={isDealer} name='isDealer' onChange={handleChange}>are you a dealer</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>

                <Button onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }