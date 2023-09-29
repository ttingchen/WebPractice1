import React from "react";

import './Project.css';
import YouTube from 'react-youtube';

const Project = ({ title, date, description, youtubeID, link }) => {
    return (
        <div className="project-container" id="project">
            <div className="project-title">
                {title}
            </div>
            <div className="project-date">
                {date.start} - {date.end}
            </div>
            <div className="project-animator">
                <div className="project-text">
                    {description}
                    {link}
                </div>
                <div className="project-grid">

                    <YouTube videoId={youtubeID} />
                    {/* <div className="projects-itemtext">img2 content</div> */}
                </div>
            </div>
        </div>
    );
};

export default Project;
