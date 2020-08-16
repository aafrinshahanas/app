import React, { Component } from 'react'
import Afrin from './Afrin';
class Demo extends Component {


        state = {
                 demoName: 'aafrin'
        }
            
        updateName = () => {
            this.setState({
                demoName: ""
            })
        }
    render() {
        return (
            <div>
                <h1>hi {this.props.name}</h1>
        <p> {this.state.demoName}</p>
                <Afrin parentname={this.props.name}/>

            <button onClick={this.updateName}>click</button>
            </div>
        )
    }
}

export default Demo
