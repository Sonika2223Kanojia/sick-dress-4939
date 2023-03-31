import { Heading,
    Grid,GridItem,
    Text,Box,
     HStack, 
     VStack, 
     SimpleGrid ,
     Divider,
     CardFooter,Card,
     ButtonGroup,
     Button,
     CardBody,
     Image,
     Stack
    } from "@chakra-ui/react"

const BeautyPersonalCare = () => {
    return (
        <>
         <Box w="100%" h="40px"></Box>
           <HStack>
                <Box bg="red" w="20%"  minH="100vh">hello</Box>
                <Box bg="red" w="80%"  minH="100vh">
                       <VStack >
                        <Box  bg="blue"   w="100%"  h="5vh">
                              <SimpleGrid spacing={1}  display="flex">
                                    <Box  h="5vh"  w="200px">
                                        <Text  className="font-link" 
                                        textAlign="center"  fontSize="20px" > Sort By: Popular</Text>
                                       </Box>
                                    <Box  h="5vh" >
                                     <Text className="font-link"  w="220px" textAlign="center"  fontSize="20px">Price : Low to High</Text>   </Box>
                                    <Box  h="5vh">
                                        <Text className="font-link" w="220px" textAlign="center"  fontSize="20px">Price : High to Low</Text>
                                        </Box>
                                    <Box  h="5vh">
                                        <Text className="font-link" w="130px" textAlign="center"  fontSize="20px">  Discount</Text>
                                      </Box>
                                    <Box  h="5vh">
                                        <Text className="font-link"  w="200px" textAlign="center"  fontSize="20px">New Arrivals</Text>
                                        </Box>
                              </SimpleGrid>
                        </Box>
                         <Box  bg="blue"  w="100%"   h="auto">
                             <Grid  gridTemplateColumns="repeat(4,1fr)"
                             gridTemplateRows="auto">
                                <GridItem  bg="yellow" >
                                <Card  w="100%">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
                                 </Card>
                                </GridItem>
                                <GridItem  bg="yellow" >
                                <Card  w="100%">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
                                 </Card>
                                </GridItem>
                                <GridItem  bg="yellow" >
                                <Card  w="100%">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
                                 </Card>
                                </GridItem>
                                <GridItem  bg="yellow" >
                                <Card  w="100%">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
                                 </Card>
                                </GridItem>
                             </Grid>
                             </Box>
                       </VStack>

                    </Box>
           </HStack>
        </>
         
    )
}

export default BeautyPersonalCare;