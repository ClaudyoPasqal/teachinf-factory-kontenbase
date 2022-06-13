import React from "react";
import { Link } from "react-router-dom";
import './css/Landing.css'
import Content from "./Content";

function Landing(){
    return(
        <div className="container">
            {/* Navbar Start */}
            <div className="navbar">
                <div className="home">
                    <Link to="/" id="imagehome"><img src="../images/Frame.png" alt="gagal"/></Link>
                </div>
                <div className="btn">
                    <Link to="/login" id="login" ><button className="login">Login</button></Link>
                    <Link to="/register" id="register"><button className="register">Register</button></Link>
                </div>
            </div>
            {/* Navbar End */}
            {/* Content Start */}
            <Content />
            {/* Content End */}
        </div>
    )
}


export default Landing;