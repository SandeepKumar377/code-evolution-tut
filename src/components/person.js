import React from 'react'
 
const Person =({person})=>{
    return(
        <div>
             <p>I'm {person.name}...Age {person.age}...Skill {person.skill} </p>
        </div>
    )
}
export default Person