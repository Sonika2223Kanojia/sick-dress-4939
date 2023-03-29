import {NavLink} from "react-router-dom"
import { Box ,Image,Input} from "@chakra-ui/react"
import  logo from "../Images/logo.png"
import { IconButton } from '@chakra-ui/react'

import { SearchIcon, locationIcon } from '@chakra-ui/icons'

const links =[
    {path:"/", text:" "},
    {path:"/", text:"Login/Resgister"},
    {path:"/", text:"Cart "}
]
function Navbar(){
     return(
        <Box  backgroundColor="red" w="100%"
         display="flex" alignItems="center"  justifyContent="space-around">
          <Image src={logo}  p={5} />
            <Box 
            w="28%"
            display="flex" 
            alignItems="center"
            justify-content="space-between" 
             bg="yellow"  >
            <Input   placeholder="search"
             border="none" 
             outline="none"  />
            <IconButton aria-label='Search database' icon={<SearchIcon />} />
            </Box>
            <Box >
            {links.map((link)=>(
                <NavLink  >{link.text}</NavLink>
            ))}
            </Box>
            
        </Box> 
     )
}
export default Navbar