import React from "react"
import layout from  "../components/homeLayout"

export default () => (
    <div>
    <header>
        <h1 class="logo">Photography</h1>
     <input type="checkbox" id="nav-toggle" class="nav-toggle"/> 
<nav>
<ul>
<li><a href="localhost:8000/">Home</a></li>
<li><a href="localhost:8000/nature">Nature</a></li>
<li><a href="localhost:8000/urban">Urban</a></li>
<li><a href="localhost:8000/animals">Animals</a></li>
<li><a href="localhost:8000/skies">Skies</a></li>
<li><a href="localhost:8000/credits">Credits</a></li>
</ul></nav>
</header>
<label for="nav-toggle" class="nav-toggle-label">
</label>
<div class="content">
<h>TEMPORARY TEXT</h>
</div> 
</div>
)