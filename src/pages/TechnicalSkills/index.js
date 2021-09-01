import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardContainer from "../../components/CardContainer";
import BackgroundImage from "../../components/BackgroundImage";
import SkillsCard from "../../components/SkillsCard";
import { frontend, backend, design, other } from "../../utils/TechSkillsData";
import imageURL from "../../images/background.jpg";

function TechnicalSkills(props) {
    return (
        <BackgroundImage image={imageURL} >
            <Navbar />
            <Header padding={70} title="Technical Skills" />
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
                    <SkillsCard
                        skills={frontend}
                        title="Frontend"
                        icon="desktop"
                        name="client"
                        animate="slide-left"
                    />
                    <SkillsCard
                        skills={backend}
                        title="Backend"
                        icon="server"
                        name="server"
                        animate="slide-up"
                    />
                    <SkillsCard
                        skills={design}
                        title="Design"
                        icon="paint-bucket"
                        name="design"
                        animate="slide-right"
                    />
                      <SkillsCard
                        skills={other}
                        title="Other"
                        icon="paint-bucket"
                        name="other"
                        animate="slide-right"
                    />
                </div>
            </CardContainer>
        </BackgroundImage>
    )
};

export default TechnicalSkills;