import React from "react";
// import "./style.css";
import Navbar from "../../components/Navbar";
// import HomeHeader from "../../components/HomeHeader";
import AboutContainer from "../../components/AboutContainer";
import BackgroundImage from "../../components/BackgroundImage";
import imageURL from "../../images/background.jpg";

function About() {
    return (
        <BackgroundImage image={imageURL}>
            <Navbar />
            {/* <HomeHeader /> */}
            <AboutContainer />
        </BackgroundImage>
    )
};

export default About;