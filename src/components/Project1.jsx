import React from "react";

import './Project1.css';
import YouTube from 'react-youtube';
import pic from '../assets/biped.jpg';

const Project1 = () => {
    return (
        <div className="project-container" id="project">
            <div className="project-title">
                Biped: Two-Wheeled Self-Balancing System
            </div>
            <div className="project-date">
                Apr. 2023 - May. 2023
            </div>
            <div className="project-animator">
                <div className="project-text">
                    A semester-long project focusing on both the hardware and the software of a custom two-wheeled self-balancing robot and ultimately make the two-wheeled system balance itself, as well as command the system to maneuver around.
                </div>
                <div className="project-grid">
                    {/* <img className="project-img" src={pic} alt="Project1" /> */}
                    <YouTube videoId="guyPOgvUr6w" />
                    {/* <div className="projects-itemtext">img2 content</div> */}
                </div>
            </div>
        </div>
    );
};

export default Project1;
