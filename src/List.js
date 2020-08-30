import React, { Component } from 'react'
import { data } from 'jquery';

const map = () =>{this.state.data.map((item)=>
    <div>{this.state.total}</div>
    )}  
console.log(map);
class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
           data:[ 
            {num1: "", num2: "", total: ""}
        
           ]
                 
        }
    }

    num1 = (event) =>{
        this.setState({
            num1: event.target.value
        })
    }

    num2 = (event) => {
        this.setState({
            num2: event.target.value
        })
    }

    addOpp = (event) =>{

     this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)});
     event.prevent.default();
    
    }
    subOpp = (event) =>{

        this.setState({total: parseInt(this.state.num1) - parseInt(this.state.num2)});
        event.prevent.default();
       
       }

    mulOpp = (event) =>{

        this.setState({total: parseInt(this.state.num1) * parseInt(this.state.num2)});
        event.prevent.default();
       
       }
    divOpp = (event) =>{

        this.setState({total: parseInt(this.state.num1) / parseInt(this.state.num2)});
        event.prevent.default();
       
       }

       deleteEvent = (index, e) => {
           
            data.splice(index,1);
            this.setState({data: this.state.data})

       }
       
    render() {
        return (
            <div>
            <form>
                <input type="text" value={this.state.num1} onChange={this.num1}/>
                <input type="text" value={this.state.num2} onChange={this.num2}/><br/><br/>
                <button onClick={this.addOpp}>ADD</button><br/>
                <button onClick={this.subOpp}>SUB</button><br/>
                <button onClick={this.mulOpp}>MUL</button><br/>
                <button onClick={this.divOpp}>DIV</button><br/>
                <button type="reset">RESET</button>
                
            </form> 
            value:{this.state.total}
            <br/>
            map:{this.state.data.map((item,index)=>
            <div>{this.state.total}
            </div>
            )}  
            
            </div>
            
        )
    }
}

export default List
