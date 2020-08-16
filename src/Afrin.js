import React, { Component } from 'react'

class Afrin extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        console.log('this',this.props)
        return (
            <div>

        <h1>hello 
            {this.props.parentname} </h1>


            </div>
        )
    }
}

export default Afrin
