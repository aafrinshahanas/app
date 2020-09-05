import React, { Component } from 'react'
import Test1 from './Test1';
import Test2 from './Test2';
class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 test: true,
        }
    }

clickHandle=()=>{
    this.setState({
        test: !this.state.test
           
    })
}
    

    render() {
        const style1={
            backgroundColor: 'green',
            color: 'white',
            padding: '8px'
        }
        return (
            <div>
                {this.state.test?
                <div>
                <button style={style1}onClick={this.clickHandle}>check</button>
                <Test1 content="this content belongs to test1"/>                
               </div>
:
            <div>
                <button style={style1} onClick={this.clickHandle}>check</button>
            <Test2>this content belongs to test2</Test2>  
             
            </div> 
            
    }            

        </div>
    
        )
    }
}

export default Test
