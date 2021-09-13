import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./components/Contact";
import MobileNav from "./components/Navbar/MobileNav";
import TechnicalSkills from "./pages/TechnicalSkills";


function App() {
  return (
    <Router>
      <Route exact path="/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/skills" component={TechnicalSkills} />
      <MobileNav />
      <Contact />
    </Router>
  );
}

export default App;
