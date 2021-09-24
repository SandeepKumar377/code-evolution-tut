import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props){
        super(props)
        this.state={
            name: 'Sandeep'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }



    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
