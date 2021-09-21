import React, { Component } from 'react'

class ClassClick extends Component {
    clickHere=()=>{
        console.log("Click from Class")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHere}>Click form class component</button>
            </div>
        )
    }
}
export default ClassClick