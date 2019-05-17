import React from "react"
import layout from "../components/homeLayout"
import { Link } from "gatsby"

export default () => (
    <div>
        <header>
            <h1 className="logo">Photography</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="random">Random</Link></li>
                    <li><Link to="notext">Remove text</Link></li>
                    <li><Link to="/">Show text</Link></li>
                    <li> <Link to="about">About</Link></li>
                </ul></nav>
        </header>
        <div className="content">
            <h3> Welcome to my website!
            This is an interactive photography website that I did for my tech finals project in 7th grade.
            Press random image to recieve a random photo from the internet. Press hide text to hide this text.
            And If you want to read this again, press show text!
If you want to know more about who I am, click about.</h3>
        </div>
    </div>
)