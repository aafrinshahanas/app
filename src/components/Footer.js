import React, { Component } from 'react'
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                 <div className="footer-icons">
 
 <a href="#"><i className="fa fa-facebook"></i></a>
 <a href="#"><i className="fa fa-twitter"></i></a>
 <a href="#"><i className="fa fa-linkedin"></i></a>
 <a href="#"><i className="fa fa-github"></i></a>

</div> 
            </div>
        )
    }
}

export default Footer
