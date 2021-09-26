import upliftPic from "../pages/assets/images/uplift.png";
import budgetTrackerPic from "../pages/assets/images/budgetTracker.png";
import WorkoutTrackerPic from "../pages/assets/images/workoutTracker.png";
import BetterEarthPic from "../pages/assets/images/betterEarth.png";
import dayPlannerPic from "../pages/assets/images/dayPlanner.png"

function ProjectCard(title, about, imgURL, siteURL, repoURL) {
    this.title = title;
    this.about = about;
    this.imgURL = imgURL;
    this.siteURL = siteURL;
    this.repoURL = repoURL;
};

const uplift = new ProjectCard(
    "Uplift",
    "Uplift is a full-stack application that aims to support Black-owned businesses. The user can search for black-owned businesses in their vicinity/ neighborhood or anywhere else. The application is intended to be a resource for business owners as well as consumers who are searching to support this community. The visitor to the website can make an account and add a business.",
    upliftPic,
    "https://project-uplift.herokuapp.com/",
    "https://github.com/avaarm/Uplift"
);
// need to fix app deployed version
// could add animation
const BudgetTracker = new ProjectCard(
    "Budget Tracker",
    "Budget Tracker is a progressive web application that allows the user to add and subtract funds onile or offline. Additionally, the application allows the user to visualize a graph of their total spendings in a day over a period of time.",
    budgetTrackerPic,
    "https://polar-ocean-72761.herokuapp.com/",
    "https://github.com/avaarm/Budget-Tracker"
);
const WorkoutTracker = new ProjectCard(
    "Workout Tracker",
    "Workout Tracker is a full-stack application that allows the user to add and complete workouts or exercises. Additionally, the user can check their workout dashboard to visualize graphics of their workout progress and data.",
    WorkoutTrackerPic,
    "https://limitless-hollows-96486.herokuapp.com/",
    "https://github.com/avaarm/workout-tracker"
);
const BetterEarth = new ProjectCard(
    "Better Earth",
    "Better Earth is a full-stack application that allows the user to find eco-firendly alternatives to everyday consumer products.It's built with node, mongodb, and react",
    BetterEarthPic,
    "https://sheltered-sea-24671.herokuapp.com/footprintCard",
    "https://github.com/avaarm/Better-Earth"
);
const dayPlanner = new ProjectCard(
    "Day Planner",
    "This is a frontend Javascript application that utilizes a third-party API called Moment, a time and date library.",
    dayPlannerPic,
    "https://avaarm.github.io/day_planner/",
    "https://github.com/avaarm/day_planner"
);


let portfolioData = [uplift, BudgetTracker, WorkoutTracker, BetterEarth, dayPlanner];

export default portfolioData;