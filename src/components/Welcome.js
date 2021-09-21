import React, { Component } from "react";

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        // const {stete1, state2} = this.state
        return <h1>Hello {name}...Hero name {heroName} from welcome class component</h1>
    }
}
export default Welcome