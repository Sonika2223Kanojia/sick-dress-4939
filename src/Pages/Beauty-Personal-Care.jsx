import {
    Heading,
    Grid, GridItem,
    Text, Box,
    HStack,
    VStack,
    SimpleGrid,
    Divider,
    CardFooter, Card,
    ButtonGroup,
    Button,
    CardBody,
    Image,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox, CheckboxGroup
} from "@chakra-ui/react"
import React from "react";
import { Link } from "react-router-dom";


const getData = async () => {
    try {
        let res = await fetch(" http://localhost:8000/Beauty");
        let data = await res.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}
const BeautyPersonalCare = () => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const fetchAndUpadate = () => {
        setLoading(true);
        getData()
            .then((res) => {
                console.log(res)
                setData(res)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    React.useEffect(() => {
        fetchAndUpadate();
    }, [])

  const handleclick=(id)=>{
    console.log(id)
  }
    return loading ? (
        <h1>Loading...</h1>
    ) : error ? (
        <h1>Somthing went wrong..</h1>
    ) : (
        <>
            <Box w="100%" h="40px"></Box>
            <Box display="flex" width="100%">
                <Box
                    w="20%" h="auto" >

                    <Heading w="80%" m="auto" fontSize="25px">
                        Filters
                    </Heading>
                    <Divider></Divider>
                    <Accordion borderRight="1px solid grey" w="80%" m="auto"
                        defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='2' fontSize="20px" fontWeight="600" textAlign='left'>
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg="white" display="flex"
                                flexDirection="column">


                                <Checkbox >1000-2000</Checkbox>
                                <Checkbox >500-999</Checkbox>
                                <Checkbox >100-499</Checkbox>

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='2' fontSize="20px" fontWeight="600" textAlign='left'>
                                        Category 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg="white" display="flex"
                                flexDirection="column">


                                <Checkbox >Commodities</Checkbox>
                                <Checkbox >Packaged</Checkbox>
                                <Checkbox >Snacks & Branded Foods</Checkbox>

                            </AccordionPanel>
                        </AccordionItem>

                

                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='2' fontSize="20px" fontWeight="600" textAlign='left'>
                                        Time To Ship
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg="white" display="flex"
                                flexDirection="column">


                                <Checkbox >1 day 0 minutes</Checkbox>
                               
                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>


                </Box>


                {/* productpage */}
                <Box w="80%" h="auto">
                    <VStack >
                        <Box w="100%" h="5vh">
                            <SimpleGrid spacing={1} display="flex">
                                <Box h="5vh" w="200px">
                                    <Text className="font-link"
                                        textAlign="center" fontSize="20px" > Sort By: Popular</Text>
                                </Box>
                                <Box h="5vh" >
                                    <Text className="font-link" w="220px" textAlign="center" fontSize="20px">Price : Low to High</Text>   </Box>
                                <Box h="5vh">
                                    <Text className="font-link" w="220px" textAlign="center" fontSize="20px">Price : High to Low</Text>
                                </Box>
                                <Box h="5vh">
                                    <Text className="font-link" w="130px" textAlign="center" fontSize="20px">  Discount</Text>
                                </Box>
                                <Box h="5vh">
                                    <Text className="font-link" w="200px" textAlign="center" fontSize="20px">New Arrivals</Text>
                                </Box>
                            </SimpleGrid>
                        </Box>
                        {/* showproduct */}
                        <Box w="100%" h="auto" pl="20px" pr="50px">
                            <Grid gridTemplateColumns="repeat(4,1fr)" rowGap="10px" columnGap="5px">
                                {data.map((user) => (
                                    <GridItem  >

                                        <Card w="100%" h="400px" 
                                            _hover={{ boxShadow: '1px 2px 9px #696969', }}  key={user.id}>
                                            <CardBody   >
                                                <Image h="200px" objectFit='cover'
                                                    src={user.image} alt='Green double couch with wooden legs'

                                                />
                                                <Stack mt='5' spacing='2'>
                                                    <Heading size='md' className="font-link" fontSize="15px">{user.name}</Heading>

                                                    <Text color='gold' fontSize='2xl' textAlign="center">
                                                        {user.price.substring(20)}
                                                    </Text>
                                                    <Button variant='ghost' bg="#902735"  onClick={handleclick("1")}>
                                                     Add to cart
                                                    </Button>
                                                </Stack>
                                            </CardBody>

                                        </Card>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    </VStack>

                </Box>

            </Box    >
            {/* emptybox  */}
            <Box w="100%" h="100px"></Box>

            {/* footer 
             */}
            <Grid
                className="font-link"
                gridTemplateRows="repeat(1,1fr)"
                gridTemplateColumns="repeat(4,1fr)"
                gap={7} bg="#902735" pl="130px" pr="100px">
                <GridItem w='100%' h='400'>
                    <Box pt="20px" color="white" >
                        <Text fontSize="20px" fontWeight={600} lineHeight="40px" >About Us</Text>
                        <Text fontSize="15px" fontWeight={600}>India's most convenient online grocery channel Buyerapp Fresh and Smart makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets - now shop from the comfort of your home; office, or on the move. We offer you the convenience of shopping for everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care
                            products from a single virtual store.</Text>
                        <Text fontSize="20px" fontWeight={600} lineHeight="40px">PAYMENT OPTIONS</Text>

                    </Box>
                </GridItem>
                <GridItem w='100%' h='400'>
                    <Box pt="20px" color="white" >
                        <Text fontSize="18px" fontWeight={600} lineHeight="40px">OUR COMPANY</Text>
                        <Text fontSize="15px" fontWeight={500} lineHeight="40px">About Us</Text>
                        <Text fontSize="15px" fontWeight={500} >Contact Us</Text>

                    </Box>
                </GridItem>
                <GridItem w='100%' h='400'>

                    <Box pt="20px" color="white" >
                        <Text fontSize="18px" fontWeight={600} lineHeight="40px">TOP CATEGORIES</Text>
                        <Text fontSize="15px" fontWeight={500}>Grocery</Text>

                    </Box>
                </GridItem>
                <GridItem w='100%' h='400' >
                    <Box pt="20px" color="white" >
                        <Text fontSize="18px" fontWeight={600} lineHeight="40px">POLICIES & INFO</Text>
                        <Text fontSize="15px" fontWeight={500}>Privacy Policy</Text>
                        <Text fontSize="15px" fontWeight={600}>SUPPORT</Text>
                        <Text fontSize="15px" fontWeight={600}>For Help, send an email to care@craftsvilla.com

                        </Text>

                    </Box>
                </GridItem>

            </Grid>
        </>

    )
}

export default BeautyPersonalCare;