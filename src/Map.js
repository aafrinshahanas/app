import React, { Component } from 'react'

const Number = [1,2,3];

const Result = Number.map((num)=>{
return num*2;
}); 

console.log(Result);

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
               data:[
                   {name: 'peter', age: 28},
                   {name: 'alex', age: 29}
               ]  
        }
    }

    render() {
        return (
            <div>
                {this.state.data.map((item)=>
                <div>{item.name}<br/>{item.age}</div>
                )}
            </div>
        )
    }
}

export default Map
