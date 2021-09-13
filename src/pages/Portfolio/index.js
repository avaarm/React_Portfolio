import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import PortfolioCard from "../../components/PortfolioCard";
import CardContainer from "../../components/CardContainer";
import BackgroundImage from "../../components/BackgroundImage";
import portfolioData from "../../utils/portfolioData";
import otherPortfolioData from "../../utils/otherPortfolioData"
import imageURL from "../../images/background.jpg";
import OtherPortfolioCard from "../../components/OtherPortfolioCard";


function Portfolio() {
    return (
        <BackgroundImage image={imageURL} >
            <Navbar />
            <Header padding={70} title="Portfolio" />
            <CardContainer>
                <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true" id="portfolio-section" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
                    {
                        portfolioData.map((el, index) => {
                            return <PortfolioCard
                                title={el.title}
                                about={el.about}
                                repoURL={el.repoURL}
                                siteURL={el.siteURL}
                                imgURL={el.imgURL}
                                key={index}
                            />
                        })
                    }
                </div>

            <Header padding={70} title="Other Projects" />
            <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true" id="portfolio-section" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
                    {
                        otherPortfolioData.map((el, otherIndex) => {
                            return <OtherPortfolioCard
                                otherTitle={el.otherTitle}
                                otherAbout={el.otherAbout}
                                otherSiteURL={el.otherSiteURL}
                                otherImgURL={el.otherImgURL}
                                otherkey={otherIndex}
                            />
                        })
                    }
                </div>
            </CardContainer>
        </BackgroundImage>
    )
};

export default Portfolio;