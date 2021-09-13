import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardContainer from "../../components/CardContainer";
import BackgroundImage from "../../components/BackgroundImage";
import SkillsCard from "../../components/SkillsCard";
import {Techniques, Administrative, Instruments} from "../../utils/BiotechSkillsData"
import { frontend, backend, design } from "../../utils/TechSkillsData";
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
                        icon="users"
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
                        title="Design & Other"
                        icon="nut"
                        name="design"
                        animate="slide-right"
                    />
                  
                </div>
            </CardContainer>
            <Header padding={70} title="Biotech & Clinical Skills" />
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
                    <SkillsCard
                        skills={Techniques}
                        title="Techniques"
                        icon="cog"
                        name="cog"
                        animate="slide-left"
                    />
                    <SkillsCard
                        skills={Administrative}
                        title="Administrative"
                        icon="paint-bucket"
                        name="paint-bucket"
                        animate="slide-up"
                    />
                    <SkillsCard
                        skills={Instruments}
                        title="Instruments & Cells"
                        icon="server"
                        name="server"
                        animate="slide-right"
                    />
                  
                </div>
            </CardContainer>
        </BackgroundImage>
    )
};

export default TechnicalSkills;