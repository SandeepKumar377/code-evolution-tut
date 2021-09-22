import React from "react";
import Person from "./person";

const NameList = () => {
    const names = ['Sandeep', 'Sendy', 'Deep']
    const listName= names.map((name, index) => <p key={index} >{name}</p>)
    const personList = [
        {
            id: 1,
            name: "Sandeep",
            age: 22,
            skill: "React"
        },
        {
            id: 2,
            name: "Sendy",
            age: 23,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Deep",
            age: 24,
            skill: "Asp.Net MVC"
        }
    ]

    return (
        <div>
            {/* 3rd example */}
            {personList.map(person => (
                <Person key={person.id} person={person} />
            ))}

            {/* 2nd method */}
            {listName}


            {/*1st method */}
            {/* {names.map(name => <p>{name}</p>)} */}


            {/* <p>{names[0]}</p>
            <p>{names[1]}</p>
            <p>{names[2]}</p> */}


        </div>
    )
}
export default NameList