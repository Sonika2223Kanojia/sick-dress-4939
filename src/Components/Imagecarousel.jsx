import { Button,Box,Image } from "@chakra-ui/react"
import Mycard from "../Mycard";

const Imagecarousel=()=>{
  let box= document.querySelector(".carosuel-container")
    const handlepre=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width
        console.log(width)
    }
    const handlenxt=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width
        console.log(box.scrollLeft)
    }
    return (
        <>
        <Box position="relative"  >
         <Button className="pre-btn"  onClick={handlepre}
          top={0} position="absolute"  mt={20}  
          border="none" width="60px" h="40px">
            <p style={{fontSize:"25px" ,color:"red" }}>&lt;</p></Button>
         <Button   onClick={handlenxt} className="next-btn" mt={20}   top={0} position="absolute" right={0}
         border="none" width="60px" h="40px">
            <p style={{fontSize:"25px" ,color:"red" }}>&gt;</p></Button>
        </Box>
            
        <Box className="carosuel-container"  
        pl={10} display="flex" flexDirection="row" scrollBehavior="smooth">
            
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
        <Mycard img="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
    
        </Box>


        </>
    )
}

export default Imagecarousel