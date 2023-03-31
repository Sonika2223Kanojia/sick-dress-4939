import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import  StoreNearMe from "../Pages/Store-Near-Me"
import  ProductNearMe from "../Pages/Product-Near-Me"
import   Fashion from "../Pages/Fashion"
import  BeautyPersonalCare from "../Pages/Beauty-Personal-Care"
import  Electronics  from "../Pages/Electronics"
import  HomeDecor  from "../Pages/Home-Decor"



function AllRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store-near-me" element={<StoreNearMe/>}/>
            <Route path="/product-near-me" element={<ProductNearMe/>}/>
            <Route path="/fashion" element={<Fashion/>}/>
            <Route path="/beauty-personal-care" element={<BeautyPersonalCare/>}/>
            <Route path="/home-decor" element={<HomeDecor/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/> */}
            
        </Routes>
    )
}
export default AllRouter