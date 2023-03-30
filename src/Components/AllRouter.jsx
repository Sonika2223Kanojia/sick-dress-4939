import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"



function AllRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/> */}
            
        </Routes>
    )
}
export default AllRouter