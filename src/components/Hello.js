import React from "react";

const Hello =()=>{
    // return(
    //     <div className="helloClass" id="hello">
    //         <h1>Hello Sandeep from JSX</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hello',className:'helloClass'},
        React.createElement('h1', null, 'Hello Sandeep from without JSX')
    )
}

export default Hello