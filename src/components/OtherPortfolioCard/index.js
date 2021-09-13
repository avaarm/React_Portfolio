import React from "react";
import "./style.css";

function OtherPortfolioCard(props) {
    return (
        <div>
            <div className="uk-card uk-card-default portfolio-card">
                <div className="uk-card-body portfolio-card-body">
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="true">
                        <ul className="uk-slideshow-items">
                            <li>
                                <h3 className="uk-card-title project-title">{props.otherTitle}</h3>
                                <p className="project-description">{props.otherAbout}</p>
                            </li>
                            <li>
                                <img src={props.otherImgURL} alt="" uk-cover="true" />
                            </li>
                        </ul>
                        <a className="uk-position-top-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
                    </div>
                </div>
                <div className="uk-card-footer portfolio-card-footer">
                    <div className="uk-text-center">
                        <a href={props.otherSiteURL} target="_blank" className="btn-link">
                            <button className="uk-button uk-button-default portfolio-btn">View Website</button>
                        </a>
                    
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OtherPortfolioCard;