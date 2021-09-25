import React, { Component } from 'react'
import ForwardInputRef from './ForwardInputRef'

class ForwardParentInputRef extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardInputRef ref={this.inputRef} />
                <button onClick={this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default ForwardParentInputRef
