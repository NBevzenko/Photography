import React from "react"
import {Link} from "gatsby"

export default () => (
    <div>
    <header>
        <h1 class="logo">Photography</h1>
     <input type="checkbox" id="nav-toggle" class="nav-toggle"/> 
<nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li> <Link to="about">About</Link></li>
    </ul>
    </nav>
    </header>
    <div>
        This is about page
</div>
</div>
)