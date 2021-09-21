import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>Hello {this.props.name}...Hero name {this.props.heroName} from welcome class component</h1>
    }
}
export default Welcome