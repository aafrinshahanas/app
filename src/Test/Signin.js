import React, { Component } from 'react'
import Maincontent from '../components/Maincontent';


class signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",  
           submit: true
            
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.signOut=this.signOut.bind(this)
    }


    name = (event) =>{
        this.setState({
          name: event.target.value
 
        })
     }
 
 
     
 
      password = (event) =>{
         this.setState({
           password: event.target.value
  
         })
      }
     
      handleSubmit = (event) => {
        this.setState.submit({submit: !this.state.submit})
         event.preventDefault()
         
      }

      signOut = (event) =>{
          alert(`signout successfully`)
          
          
      }
      
   

    render() {
        return (
             
            <div>
    {this.state.submit?
             <form onSubmit={this.handleSubmit}>
                 
                 <label>Name</label>
                 <input type="text" value={this.state.name} onChange={this.name} placeholder="name"/><br/>  
                 <label>Password</label>
                 <input type="password" value={this.state.password} onChange={this.password} placeholder="enter a password here"/><br/>
                 
                 <button value="submit">Submit</button>  
                 <button vlaue="forget">Forget Password</button> 
                 </form>    
    :
                <Maincontent/>
    }
    
     </div>
                       
        )
    }
}

export default signin
