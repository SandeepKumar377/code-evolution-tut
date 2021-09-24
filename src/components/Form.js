import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)

        this.state={
            username:'',
            comments:'',
            topic:'react'
        }
    }
    onChangeUserName=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    onChangeComments=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    onChangeTopic=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    submitForm=event=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
        event.preventDefault()
    }
    render() {
        const {username, comments, topic}= this.state
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={username} onChange={this.onChangeUserName} />
                </div>
                <div>
                    <label>Text Area</label>
                    <textarea value={comments} onChange={this.onChangeComments} ></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={topic} onChange={this.onChangeTopic} >
                        <option>AngularJS</option>
                        <option>ReactJS</option>
                        <option>VueJS</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}
export default Form


