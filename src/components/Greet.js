import React from "react";

// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name}....Hero name {heroName} from Greet component</h1>
//         </div>
//     )
// }

const Greet = (props) => {
    const {name, heroName}= props
    return (
        <div>
            <h1>Hello {name}....Hero name {heroName} from Greet component</h1>
        </div>
    )
}


export default Greet