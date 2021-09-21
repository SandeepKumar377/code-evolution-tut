import React from 'react'

function FunctionClick() {

   const clickHere=()=>{
       console.log("Button clicked")
    }

    return (
        <div>
            <button onClick={clickHere}>Click here</button>
        </div>
    )
} 

export default FunctionClick
