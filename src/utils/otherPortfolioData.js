import HealthFrontiersPic from "../pages/assets/images/healthFrontiers.png";
import DevBunPic from "../pages/assets/images/devBun.png"

function OtherProjectCard(otherTitle, otherAbout, otherImgURL, otherSiteURL){
    this.otherTitle = otherTitle;
    this.otherAbout = otherAbout;
    this.otherSiteURL = otherSiteURL;
    this.otherImgURL = otherImgURL;

}

const HealthFrontiers = new OtherProjectCard(
    "Health Frontiers",
    "A squarespace website for the non profit organization Health Frontiers/ Fornteras Saludables",
    HealthFrontiersPic,
    "https://www.fronterassaludables.org/",
);

const DevBun = new OtherProjectCard(
    "Dev Bun",
    "A wordpress programming blog mainly focused on teaching new topic",
    DevBunPic,
    "https://www.devbun.com/",
);

let otherPortfolioData = [HealthFrontiers, DevBun ];

export default otherPortfolioData;