import React from "react"
import layout from "../components/homeLayout"
import { Link } from "gatsby"

export default () => (
    <div>
        <header>
            <h1 class="logo">Photography</h1>
            <input type="checkbox" id="nav-toggle" class="nav-toggle" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="random">Random</Link></li>
                    <li><Link to="notext">Remove text</Link></li>
                    <li><Link to="/">Show text</Link></li>
                    <li> <Link to="about">About</Link></li>
                </ul></nav>
        </header>
        <div class="content">
            <h3>I did this webpage for my 7th grade tech project. 
                We have been doing a coding unit since the start of the second semester at THRogers school. 
                It has been a good experience and I hope to try again! </h3>
        </div>
    </div>
)