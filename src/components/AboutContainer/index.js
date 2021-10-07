import React from "react";
import Header from "../../components/Header";
import "./style.css";
import profile from "./profile.png"

function AboutContainer() {
    return (
        // the uk-container class gives it a max width and wraps the main content of the website, also it will be centers and will have padding on the sides
        <div className="uk-container uk-margin-right">
            <div className="uk-text-center">
                <div id="about-container">
                    <div id="about-me"><img src={profile} width="100" height="100" alt="profile picture"></img>
                     <Header title="About Me" />
                        <p className="uk-text-justify about-me">
                        Full-stack web developer with a background in immunology and preclinical research. 
                        I began my journey into programming in order to create access to tech for young Armenian women,
                        who do not have the opportunity or tools to learn programming or computer science. 
                        I now hope to work in the tech industry and along with working on new, exciting technology, gain knowledge and experience, 
                        so I can better inform young Armenian women who are also interested in technology
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutContainer;
