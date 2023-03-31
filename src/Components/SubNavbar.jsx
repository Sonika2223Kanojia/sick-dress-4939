import { HStack, Box, SimpleGrid, Heading, background } from "@chakra-ui/react"
import '../App.css';
import { Link } from "react-router-dom"


function SubNavbar() {
  return (
    <HStack>
      <Box w="100%" h="50px" bg="#902735"

      >

        <SimpleGrid m="auto" w="60%" display="flex"
           spacing='1px' color="white">

          <Box height='50px'  w="170px"
           _hover={{backgroundColor:"#E8E8E8", color:"#902735"}}  >
            <Heading mt="12px" 
              fontSize="18px"
              textAlign="center" >
              <Link className="font-link" to="/store-near-me">Stores Near  Me</Link>

            </Heading>
          </Box>
          <Box  height='50px' w="170px"  _hover={{backgroundColor:"#E8E8E8", color:"#902735"}}  >
            <Heading mt="12px" 
              fontSize="18px"
              textAlign="center" >
              <Link className="font-link"  to="/product-near-me">Product Near Me</Link>
            </Heading>
          </Box>
          <Box     height='50px' w="100px" _hover={{backgroundColor:"#E8E8E8", color:"#902735"}}  >
            <Heading mt="12px" 
              fontSize="18px"
              textAlign="center" >
              <Link className="font-link"  to="/fashion">Fashion </Link>
            </Heading>
          </Box>
          <Box height='50px'  w="250px" _hover={{backgroundColor:"#E8E8E8", color:"#902735"}}  >
            <Heading mt="12px" 
              fontSize="18px"
              textAlign="center" >
              <Link className="font-link"  to="/beauty-personal-care">Beauty & Personal Care </Link>
            </Heading>
          </Box>
          <Box  height='50px' w="130px"  _hover={{backgroundColor:"#E8E8E8", color:"#902735"}} >
            <Heading mt="12px" 
              fontSize="18px"
              textAlign="center" >
              <Link className="font-link"  to="/home-decor">Home Decor </Link>
            </Heading>
          </Box>
          <Box  height='50px'  w="130px" _hover={{backgroundColor:"#E8E8E8", color:"#902735"}}   >
            <Heading mt="12px" 
              fontSize="18px"
              textAlign="center" >

              <Link className="font-link"  to="/electronics">Electronics</Link>
            </Heading>
          </Box>


        </SimpleGrid>

      </Box>
    </HStack>







  )
}
export default SubNavbar