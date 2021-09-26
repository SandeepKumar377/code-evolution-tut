import React, { Component } from "react";

class ClickCounterTwo extends Component {
   
    render() {
        const { count, incrementCount } = this.props
        return (
            <h1>
                <button onClick={incrementCount} >Click {count} times</button>
            </h1>
        )
    }
}
export default ClickCounterTwo