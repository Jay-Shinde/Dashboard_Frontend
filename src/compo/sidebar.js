import React from 'react'
import "../Dash.css"
import logo from "./images/logo.png";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.png";
import logo6 from "./images/logo6.png";
import logo7 from "./images/logo7.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarItm-head">
      <img className="logo" src={logo} alt="logo" />
      <span>Argon Dashboard Pro</span>
    </div>
    <hr id="line" />

    <div className="sidebaritems">
      <img className="logo" src={logo1} alt="logo" />
      <span><a href="#">Dashboard</a></span>
    </div>
    <div className="sidebaritems">
      <img className="logo" src={logo2} alt="logo" />
      <span><a href="#">Billings</a></span>
    </div>
    <div className="sidebaritems">
      <img className="logo" src={logo3} alt="logo" />
      <span><a href="#">Tables</a></span>
    </div>
    <div className="sidebaritems">
      <img className="logo" src={logo4} alt="logo" />
      <span><a href="#">Virtual Reality</a></span>
    </div>
    <div className="sidebaritems">
      <img className="logo" src={logo} alt="logo" />
      <span><a href="#">RTL</a></span>
    </div>
    <h6>Profile Pages</h6>
    <div className="sidebaritems">
      <img className="logo" src={logo5} alt="logo" />
      <span><a href="#">Profile</a></span>
    </div>
    <div className="sidebaritems">
      <img className="logo" src={logo6} alt="logo" />
      <span><a href="#">Sigh In</a></span>
    </div>
    <div className="sidebaritems">
      <img className="logo" src={logo7} alt="logo" />
      <span><a href="#">Sign Up</a></span>
    </div>
  </div>

  )
}

export default Sidebar