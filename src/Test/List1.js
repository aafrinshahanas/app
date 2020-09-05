import React, { Component } from 'react'
class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
           value:[
            {num1: 0, num2: 0,total: []}
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
     event.preventdefault();
     this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)});
    }

    
    render() {
    
        return (
            <div>
            <form>
                <input type="text" value={this.state.num1} onChange={this.num1}/>
                <input type="text" value={this.state.num2} onChange={this.num2}/><br/><br/>
                <button onClick={this.addOpp}>ADD</button><br/>
                <button type="reset">RESET</button>
                
            </form> 
            value:{this.state.total}
            <br/>
             list:
             {this.state.value.map((items)=>
             <div>{items.total}</div>
             )}
            </div>
            
        )
    }
}

export default List
