import React from "react";


const Mycard=({img})=>{
    return(
        <div style={{  minWidth: "300px",
            height: "400px",
            }}>
            <img  width="100%" src={img}/>
        </div>
    )
}
export default Mycard