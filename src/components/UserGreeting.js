import React, { Component } from "react";

class UserGreeting extends Component {

    constructor() {
        super()

        this.state = {
            isLogedIn: true
        }
    }

    render() {
        //4th short circuit operator
        //In this approach if condition is true then show data if false then nothing happen 
        return this.state.isLogedIn && <h1>Hello...Sandeep</h1>
         // 3rd method using JSX method 
        //  return this.state.isLogedIn?<h1>Hello...Sandeep</h1>:<h1>Hello...Guest</h1>

        // 2nd method element varriable approach

        // let message
        // if (this.state.isLogedIn) {
        //     message = <h1>Hello...Sandeep</h1>
        // } else {
        //     message = <h1>Hello...Guest</h1>
        // }
        // return <div>{message}</div>

        // 1st method

        // if (this.state.isLogedIn) {
        //     return(
        //         <div>
        //             <h1>Hello...Sandeep</h1>
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             <h1>Hello...Guest</h1>
        //         </div>
        //     )            
        // }
        // return(
        //     <div>
        //         <h1>Hello...Sandeep</h1>
        //         <h1>Hello...Guest</h1>
        //     </div>
        // )
    }
}

export default UserGreeting