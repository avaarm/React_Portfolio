import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function MobileNav() {
    return (
        <div id="menu-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="uk-list">
                    <li><Link to="/about" className="nav-item mobile-nav-item">About</Link></li>
                    <li><Link to="/portfolio" className="nav-item mobile-nav-item">Portfolio</Link></li>
                    <li><Link to="/skills" className="nav-item mobile-nav-item">Skills</Link></li>
                    <li><a uk-toggle="target: #contact-canvas" className="nav-item mobile-nav-item">Contact</a></li>
                </ul>
            </div>
        </div>
    )
};

export default MobileNav;