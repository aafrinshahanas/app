import React, { Component } from 'react'
import Form from '../components/Form';
import Signin from './Signin'    
class Formfront extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shown: true,
            shown1: true
            
                 
        }
        this.signUp=this.signUp.bind(this)
        this.signIn=this.signIn.bind(this)
    }

    signUp = (event) =>{

    this.setState({
        shown: !this.state.shown
        
    })
    
 }

 signIn = (event) =>{

    this.setState({
        shown1: !this.state.shown1 
    })
    
 }
     
    render() {
        return (


            
            <div>


                
            {this.state.shown?
            
                
                    <button value="submit" onClick={this.signUp}> <a href="src\Form.js">Sign Up</a></button>
                    
        :
        
        <Form/>
        
        }

       {this.state.shown1?
       
         <button value="submit" onClick={this.signIn}> Sign In</button>
         
:
<Signin/>
    }



            </div>
            
          
        )
        
    }

}

export default Formfront
