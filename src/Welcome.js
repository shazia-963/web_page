import React from "react";
import classroom from './Images/classroom.png';
 import { Link } from "react-router-dom";
import "./Events.js";
import "./welcome.css";
import "./Welcome.js";

function Welcome() {
  return (
    <div className="navbar">
    <div className="logo">Web-based E-learning Program</div>
    <ul>
     <input type="checkbox" id="check"></input>
     <label for="check" className="hamburger">&#9776;</label>
     <div className="menu">
         <li><Link to ="/Events">Events</Link> </li>
         <li><Link to ="/Portal">Portal</Link></li>
         <li><Link to ="/search" >Search</Link></li>
         <li><a href ="/">logout  <i class="fa-solid fa-right-from-bracket"></i></a></li>
         </div>
   </ul>
 <div className="abc">
 <img src={classroom}width={1200} height={700} class="responsive"alt="abc"/>
 </div>
</div>
  )
}
export default Welcome;










