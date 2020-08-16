import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",    
            shown: true
        }
         
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    

    name = (event) =>{
       this.setState({
         name: event.target.value

       })
    }


    email = (event) =>{
        this.setState({
          email: event.target.value
 
        })
     }

     password = (event) =>{
        this.setState({
          password: event.target.value
 
        })
     }
    
     handleSubmit = (event) => {
     
        
        
        this.setState({
          shown: !this.state.shown
        })
        event.preventDefault()
        
     }
     
      
    
     



    render() {
        return (
            <div  className="form">
              
{this.state.shown?
              <form onSubmit={this.handleSubmit}>
                <h1>user registration</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.name} placeholder="name"/><br/>  
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={this.email} placeholder="email"/><br/>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.password} placeholder="enter a password here"/><br/>
                <button value="submit">Submit</button>                  
            </form>              
:
<h1>hi, {this.state.name}registered successfully</h1>
 
}       

            </div>
        )
    }
}

export default form
