import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    // clickHere(){
    //     this.setState({
    //         message:"Hello...Sandeep"
    //     })
    //     console.log(this)
    // }
    clickHere=()=>{
        this.setState({
            message:"Hello...Sandeep"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHere.bind(this)} >Click</button> */}
                {/* <button onClick={()=>this.clickHere()} >Click</button> */}
                <button onClick={this.clickHere} >Click</button>
            </div>
        )
    }
}

export default EventBind
