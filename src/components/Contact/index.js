import React from "react";
import "./style.css";

function ContactCanvas() {
    return (
        <div id="contact-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">Contact Me</h3>
                <ul className="uk-list">
                    <li>
                        <a uk-icon="icon: mail" className="contact-icon contact-link-icon"
                            href="mailto:emavanesem@gmail.com"></a>
                        <a className="contact-link contact-li uk-text-middle"
                            href="mailto:emavanesem@gmail.com">emavanesem@gmail.com</a>
                    </li>
                    <li>
                        <span uk-icon="icon: home" className="contact-icon"></span>
                        <span className="contact-li uk-text-bottom">Seattle, WA</span>
                    </li>
                    <li>
                        <a uk-icon="icon: github" href="https://github.com/avaarm"
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-middle" href="https://github.com/avaarm"
                            target="_blank">avaarm</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default ContactCanvas;