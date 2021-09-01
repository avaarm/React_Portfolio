import employeeDirPic from "../pages/assets/images/image.jpg";


function ProjectCard(title, about, imgURL, siteURL, repoURL) {
    this.title = title;
    this.about = about;
    this.imgURL = imgURL;
    this.siteURL = siteURL;
    this.repoURL = repoURL;
};

const employeeDirCard = new ProjectCard(
    "Employee Directory",
    "An application, built with React, that allows the user to have quick and easy access to employee information. User may filter and search employees by name, and sort by name, email, DOB, and phone number.",
    employeeDirPic,
    "https://jpreston-alt.github.io/React-Employee-Directory/",
    "https://github.com/jpreston-alt/React-Employee-Directory"
);

let portfolioData = [employeeDirCard];

export default portfolioData;