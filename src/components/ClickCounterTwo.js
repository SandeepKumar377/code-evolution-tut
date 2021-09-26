import React, { Component } from "react";

class ClickCounterTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const { count } = this.state
        return (
            <h1>
                <button onClick={this.incrementCount} >Click {count} times</button>
            </h1>
        )
    }
}
export default ClickCounterTwo