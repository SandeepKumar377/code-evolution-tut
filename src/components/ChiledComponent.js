import React from "react";

const ChiledComponent =(props)=>{
    return(
        <div>
            <button onClick={()=>props.greetHandler('chiled')}>Greet Parent</button>
        </div>
    )

}
export default ChiledComponent