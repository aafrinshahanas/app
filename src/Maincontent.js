import React, { Component } from 'react'
import './Maincontent.css';
class Maincontent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            
    <div>

          <div className="row">
                <div className="side">
                    
                <ul>
                  <li><a href="about.js">About</a></li>
                  <li><a href="work.js">Work</a></li>
                  <li><a href="blog.js">Blog</a></li>
                  <li><a href="contact.js">Contact</a></li>

                </ul>
               
                </div>
                <div className="main">
                    <h1>Passinate<br/>UX Designer</h1>
                    <p>Be explicit about your skills, the process you use, and the kinds of projects you specialize in,
                         but be mindful of presenting too much information. UX portfolios should not be a 
                         retrospective of ALL past work. 
                        Choose projects that are specific, recent, and outstanding, and present them as a design process.</p>
                       <h3> <a href="about.js">Read More</a></h3>
                 </div>  
                 <div className="img">
                    <img src="src\Image\org.jpg" alt="img" width="180" height="160"/>
                </div>

            </div>


    </div>
                
        )
    }
}

export default Maincontent
