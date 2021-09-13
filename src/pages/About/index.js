import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import AboutContainer from "../../components/AboutContainer";
import BackgroundImage from "../../components/BackgroundImage";
import imageURL from "../../images/background.jpg";
import Footer from "../../components/Footer"

function About() {
    return (
        <BackgroundImage image={imageURL}>
            <Navbar />
            {/* <Header /> */}
            <AboutContainer />
            <Footer />
        </BackgroundImage>
    )
};

export default About;