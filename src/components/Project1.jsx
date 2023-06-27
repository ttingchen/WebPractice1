import React from "react";

import './Project1.css';
import pic from '../assets/mountain.jpg';

const Project1 = () => {
    return (
        <div className="project-container" id="project">
            <div className="project-title">
                PROJECT NAME
            </div>
            <div className="project-date">
                Jun. 2022 - Aug. 2022
            </div>
            <div className="project-animator">
                <div className="project-text">
                    From user experience to functionality, security, and scalability, there's no shortage of things to keep in mind during the development process. One of the keys to success is starting with a clear plan that outlines your goals and objectives. This will help ensure that everyone involved in the project is on the same page and working towards the same end result. As you move through the development process, it's important to remain flexible and open to new ideas and feedback from users. With the right approach, a web application project can be a great opportunity to create something truly innovative and valuable for your users.
                </div>
                <div className="project-grid">
                    <img className="project-img" src={pic} alt="Project1" />
                    {/* <div className="projects-itemtext">img2 content</div> */}
                </div>
            </div>
        </div>
    );
};

export default Project1;
