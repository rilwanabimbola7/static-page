import React from "react"
import logo from "../images/react-icon-small.png"
import '../style.css';

export default function Navbar() {
    return (
        <nav>
            <img src = {logo} className= "nav--icon"/>
            <h3 className="nav--logo_text"> ReactFacts</h3>
            <h4 className="nav--title"> React Course - Project</h4>
            
        </nav>
    )
}
