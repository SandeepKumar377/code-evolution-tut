import React, { Component } from "react";
import ChiledComponent from "./ChiledComponent";

class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ParentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(chiledName) {
        // alert("hello" + this.state.ParentName)
        alert(`Hello ${this.state.ParentName} from ${chiledName}`)
    }
    render() {
        return (
            <div>
                <ChiledComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}
export default ParentComponent