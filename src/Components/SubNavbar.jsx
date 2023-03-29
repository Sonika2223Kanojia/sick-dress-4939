import {NavLink} from "react-router-dom"
const links =[
    {path:"/store", text:"Stores Near  Me "},
    {path:"/product", text:"Product Near Me"},
    {path:"/fashion", text:"Fashion "},
    {path:"/beauty-personal-care", text:"Beauty & Personal Care "},
    {path:"/home-decor", text:"Home Decor "},
    {path:"/electronics", text:"Electronics "},
]
function SubNavbar(){
     return(
       <>
       {links.map((link)=>(
                <NavLink  >{link.text}</NavLink>
            ))}
       </>
            
            
            
      
     )
}
export default SubNavbar