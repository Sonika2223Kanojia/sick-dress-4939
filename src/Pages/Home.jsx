import React from "react";
import {
    Center, Heading, Box, SimpleGrid,
    Image, Grid, GridItem, Text, Container
} from "@chakra-ui/react";
// import Carousel from 'react-elastic-carousel';
import Card from "../CaroselItem1"
import CaroselItem1 from "../CaroselItem1"
import Carousel from 'carousel-react-rcdev'

    
    


    


        


  


function Home() {

    const breakPoints = [
        { widht: 1, cardtoshow: 1 },
        { widht: 550, cardtoshow: 2 },
        { widht: 768, cardtoshow: 3 },
        { widht: 1200, cardtoshow: 4 },
    ]
    return (
        <>


            <Center>
                <Heading className="font-link"
                    fontWeight={400}
                    letterSpacing={2}
                >Store Near Me</Heading>
            </Center>
            
            <Carousel breakPoints={breakPoints}  >
        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
    </Carousel>

            {/* <Carousel breakPoints={breakPoints} background="black">

                <CaroselItem1 Img="https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png" />
                <CaroselItem1 Img="https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" />
                <CaroselItem1 Img="https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" />
                <CaroselItem1 Img="https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" />
                <CaroselItem1 Img="https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" />


            </Carousel> */}

            <SimpleGrid bg="black" minChildWidth='120px' spacing='40px'>
                <Box bg="black" height='120px'
                    display="flex" justifyContent="center"
                >
                    <Center>
                        <Image src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png" />

                    </Center>
                </Box>
                <Box bg="black" height='120px'
                    display="flex" justifyContent="center"
                >
                    <Center>
                        <Image src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png" />

                    </Center>
                </Box>
                <Box bg="black" height='120px'
                    display="flex" justifyContent="center"
                >
                    <Center>
                        <Image src="	https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png" />

                    </Center>
                </Box>
                <Box bg="black" height='120px'
                    display="flex" justifyContent="center"
                >
                    <Center>
                        <Image src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png" />
                    </Center>
                </Box>
                <Box bg="black" height='120px'
                    display="flex" justifyContent="center"
                >
                    <Center>
                        <Image src="	https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png" />
                    </Center>
                </Box>

            </SimpleGrid>
            {/* grid  */}
            <Grid
                templateColumns='repeat(2, 1fr)'
                templateRows='repeat(2,1fr)' rowgap={6} columnGap={8}
                mt={10} ml={40} mr={40}>
                <GridItem w='100%' h='400'  >
                    <Image src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" />
                </GridItem>
                <GridItem w='100%' h='400'  >
                    <Image src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" />
                </GridItem>
                <GridItem w='100%' h='400'  >
                    <Image src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" />
                </GridItem>
                <GridItem w='100%' h='400'  >
                    <Image src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" />
                </GridItem>

            </Grid>

         

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

export default Home