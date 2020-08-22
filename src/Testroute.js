import React, { Component } from 'react'
import Form from './Form';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Maincontent from './Maincontent';


const Home = () => {
    return (<h3>home</h3>)
  }
  
  
class Testroute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: false    

        }
    }


loginHandle = () =>{

    this.setState({login: true})
}



    render() {
        return (
            <Router>
    <div>
    <NavLink to="/Home"  exact activeStyle = {
      {color: 'green'}
    }>Home</NavLink>

    <NavLink to="/Maincontent" exact activeStyle = {
      {color: 'green'}
    }>About</NavLink>
    
    <button value="click" onClick={this.loginHandle.bind(this)}><NavLink to="/Form" exact activeStyle = {
      {color: 'green'}
    }>Form</NavLink></button>
   
   

    <Switch>
    <Route path="/Home"  exact component={Home}/>
    <Route path="/Maincontent"><Maincontent/></Route>
    <Route path="/Form/" exact render ={()=>(
        this.state.login? <Form/>: <Redirect to="/" />
    )}>
        
        </Route>
    
    </Switch>
    </div>
    </Router>
        )
    }
}

export default Testroute
