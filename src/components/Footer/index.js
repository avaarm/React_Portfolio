import React from "react";
import "./style.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="uk-text-center uk-text-middle footer">
                <span> © Emma </span> <br />
                <a uk-icon="icon: github" href="https://github.com/avaarm-alt" className="contact-icon contact-link-icon" target="_blank"></a>
                <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:emavanesem@gmail.com"></a>
            </footer>
        )
    }
};

export default Footer;