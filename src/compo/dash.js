import React from "react";
import "../Dash.css";
import Sidebar from "./sidebar";
import logo from "./images/logo.png";
import graph from "./images/Line-Graph.png";
import shape from "./images/shape.png";
import card from "./images/card.png";
import { hover } from "@testing-library/user-event/dist/hover";
const Dash = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <div className="navbar">
          <div className="contleft">
            <img style={{ marginLeft: "20px" }} src={logo} alt="" />
            <h4 style={{ marginLeft: "20px" }}>Dashboard</h4>
          </div>
          <div className="contright">
            <input type="text" style={{borderRadius:'5px', borderWidth:'0px'}} placeholder="🔍Type here..." />
            <h5 style={{ fontWeight: "lighter" }}>Sigh In</h5>
            <h4>🙍‍♂️</h4>
            <h4>🔔</h4>
            <h4>🎡</h4>
          </div>
        </div>
        <div className="cards">
          <div className="carditem">
            <img
              src={card}
              style={{ width: "100%", height: "80%", borderRadius: "10px" }}
              alt="card"
            />
          </div>
          <div className="carditem">
            <img
              src={card}
              style={{ width: "100%", height: "80%", borderRadius: "10px" }}
              alt="card"
            />
          </div>
          <div className="carditem">
            <img
              src={card}
              style={{ width: "100%", height: "80%", borderRadius: "10px" }}
              alt="card"
            />
          </div>
          <div className="carditem">
            <img
              src={card}
              style={{ width: "100%", height: "80%", borderRadius: "10px" }}
              alt="card"
            />
          </div>
        </div>
        <div className="graphs">
          <div className="graphitem">
            <img
              src={graph}
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              alt="graph !"
            />
          </div>
          <div className="graphitem" style={{ width: "450px" }}>
            <img
              src={shape}
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              alt="add !"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
