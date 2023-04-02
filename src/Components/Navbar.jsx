import { Link, useNavigate } from "react-router-dom"
import { Box, Center, Image, Input, Text, SimpleGrid } from "@chakra-ui/react"

import logo from "../Images/logo.png"
import { IconButton } from '@chakra-ui/react'

import { SearchIcon, locationIcon, CartIcon } from '@chakra-ui/icons'
import React from "react"


function Navbar() {
    const [text, setText] = React.useState("")
    const navigate = useNavigate()
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleclick = () => {
        navigate("/beauty-personal-care")
        console.log("hi")
        setText("")
    }
    const handleImg = () => {
        navigate("/")

    }

    return (
        <Box w="100%">

            <SimpleGrid  pt={2} pb={2} w="100%" display="flex"
                flexDirection="row"
                spacing='1px' >

                <Box height='50px' w="20%">
                    <Center>

                        <Image src={logo} onClick={handleImg} pt={2} />
                    </Center>
                </Box>

                <Box height='50px' w="40%"   >
                    <Box
                        mt={1}
                        display="flex"
                        alignItems="center"
                        justify-content="space-between"
                        bg="#DCDCDC" border="none" borderRadius="5px">
                        <Text pl={4} fontWeight={600}>Search</Text>
                        <Input placeholder="Search here for products in Mumbai"
                            type="text" value={text} onChange={handleText}
                            border="none"
                            outline="none" />
                        <IconButton bg="#DCDCDC" aria-label='Search database'
                            onClick={handleclick} icon={<SearchIcon />} />
                    </Box>

                </Box>
                <Box height='50px' w="55%" display="flex"
                    flexDirection="row" justifyContent="end"
                    alignItems="center"   >

                    <Box height='50px' w="150px" font-size="20px" pt={3}>
                        <Link to="/login" >
                            <Text fontSize="15px" fontWeight={600}>
                                Signin / Register
                            </Text>
                        </Link>
                    </Box>
                    <Box height='50px' w="190px" pt={3}>
                        <Link to="/cart" >
                            <Text fontSize="15px" fontWeight={600}>
                                Cart  </Text></Link>

                    </Box>

                </Box>

            </SimpleGrid>
        </Box>
    )
}
export default Navbar