import React from "react"
import layout from  "../components/homeLayout"
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
<li><a href="https://source.unsplash.com/random">Home</a></li>
<li><a href="#">Random Image</a></li>
<li><a href="#">Remove Text</a></li>
<li><a href="#">Show Text</a></li>
<li><a href="#">About</a></li>
</ul></nav>
</header>
<label for="nav-toggle" class="nav-toggle-label">
</label>
<div class="content">
<h> Welcome to my website! 
This is an interactive photography website that I did for my tech finals project in 7th grade. 
Press random image to recieve a random photo from the internet. Press hide text to hide this text. 
And If you want to read this again, press show text! 
If you want to know more about who I am, click about.</h>
</div> 
</div>
)