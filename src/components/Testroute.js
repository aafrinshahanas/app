import React, { Component } from 'react'
import Form from './Form';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Maincontent from './Maincontent';
import Arithmetic from './Arithmetic';
import Map from './Map';
import './Testroute.css';
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
    <div class="Nav">
    <NavLink to="/Home"  exact activeStyle = {
      {color: 'green' , textDecoration: 'none'}
    }>Home</NavLink>
    <NavLink to="/Maincontent" exact activeStyle = {
      {color: 'green' , textDecoration: 'none'}
    }>About</NavLink>
    <button ClassName= "Form" value="click" onClick={this.loginHandle.bind(this)}><NavLink to="/Form" exact activeStyle = {
      {color: 'green' , textDecoration: 'none'}
    }>Form</NavLink></button>
    <NavLink to="/Arithmetic" exact activeStyle = {
      {color: 'green', textDecoration: 'none'}
    }>Arithmetic</NavLink>
    <NavLink to="/Map" exact activeStyle = {
      {color: 'green', textDecoration: 'none'}
    }>Map</NavLink>

    <Switch>
    <Route path="/Home"  exact component={Home}/>
    <Route path="/Maincontent"><Maincontent/></Route>
    <Route path="/Form/" exact render ={()=>(
        this.state.login? <Form/>: <Redirect to="/" />   
    )}></Route>
    <Route path="/Arithmetic"><Arithmetic/></Route>
    <Route path="/Map"><Map/></Route>
    </Switch>
    </div>
    </Router>
        )
    }
}

export default Testroute
