import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Sandeep"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks for Subscribing."
        })
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message