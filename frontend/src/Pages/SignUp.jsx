  import {Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,
        useColorModeValue,Link,Checkbox} from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { NavLink } from 'react-router-dom';

  const initState={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    isDealer:false
  }
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formState, setFormState]=useState(initState)
    const {firstName,lastName,email,password,isDealer}=formState;

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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>

                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="firstName" value={firstName} onChange={handleChange} />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastName" value={lastName} onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={email} onChange={handleChange} />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>

                  <Input type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <br />


                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox name="isDealer" value={isDealer} onChange={handleChange} >are you a dealer</Checkbox>
                  
                </Stack>


              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <NavLink style={{color:"blue"}} to='/login'>Login</NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }