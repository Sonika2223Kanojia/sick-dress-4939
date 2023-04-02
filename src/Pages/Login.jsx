import { FormControl,FormLabel,Input,Box,Button, Center, Heading, VStack, } from "@chakra-ui/react";
const Login=()=>{

 const handleChange=()=>{
    const {name, value}= e.target
      this.setState({
        [name]: value
      })}
      
     return(
        <>
        <Box width="30%" margin=" 50px auto">
          <Center>
            <VStack>

        < Heading>
             SignIn Here
        </Heading>
         <form>
               <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange}/>
               <button type="submit">Submit</button>
         </form>
        
         < Heading>
             Otp here
        </Heading>
         <form>
               <input type="number" name="otp" placeholder="OTP number" required onChange={handleChange}/>
               <button type="submit">Submit</button>
         </form>
        
         
            </VStack>
          </Center>
        </Box>
        </>
     )
}
export default Login;