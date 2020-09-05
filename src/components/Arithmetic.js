import React, { Component } from 'react'
class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
           num1: "", 
           num2: "",
           total: []    
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
     event.preventdefault();
     this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)});
    }

    subOpp = (event) =>{
        event.preventdefault();
        this.setState({total: parseInt(this.state.num1) - parseInt(this.state.num2)});
       }

    mulOpp = (event) =>{
        event.preventdefault();
        this.setState({total: parseInt(this.state.num1) * parseInt(this.state.num2)});
       }

    divOpp = (event) =>{
        event.preventdefault();
        this.setState({total: parseInt(this.state.num1) / parseInt(this.state.num2)});
       }

    render() {
        const result = this.state.total.map((item) =>{
            return<div>{item.total}</div>
        });
    
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
             list:{result}
            </div>
            
        )
    }
}

export default List
