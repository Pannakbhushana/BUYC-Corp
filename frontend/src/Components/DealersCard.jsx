import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
  
  
  
  export default function DealersCard({...el}) {
    
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${el.image_url})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={el.image_url}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} textTransform={'uppercase'}>
             Model- {el.model}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              mileage- {el.mileage}
            </Text>

            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            max_speed- {el.max_speed}
            </Text>

            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            power- {el.power}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             Year- {el.year}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             color- {el.color}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               price- ${el.price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                ${Number(el.price)+10000}
              </Text>
            </Stack>
          </Stack>
          <br />
          <Button colorScheme='teal' size='lg'  onClick={()=>{}} >
            Buy Now
          </Button>
        </Box>
      </Center>
    );
  }

  
    
