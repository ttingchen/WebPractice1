import React, { useState } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import pic1 from '../assets/flower.jpg';
import pic2 from '../assets/factory.jpg';
import pic3 from '../assets/mountain.jpg';
import p1 from '../assets/biped.jpg';
import defa from '../assets/p1.jpg';
import mirror from '../assets/mirror.png';
import { send } from 'emailjs-com';

function Home() {
    const [toSend, setToSend] = useState({
        from_name_first: '',
        from_name_last: '',
        from_email: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        send(
            'service_zg7xfi9',
            'template_gi8k24h',
            toSend,
            'k30PFcyjgb34ExFAU'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                handleReset();

                setToSend({ messageSent: "Message Sent!" });
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

        // Or you can work with it as a plain object:
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
    }
    function handleReset() {
        setToSend({ from_email: "", from_name_first: "", from_name_last: "", message: "", messageSent: "" });
    }
    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <img className="slide-img" src={showSlides()} alt="Picture1" />
                </div>
                <div className="dot-container">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                <span className="prev" onClick={minusSlides}>&#10094;</span>
                <span className="next" onClick={plusSlides}>&#10095;</span>
            </div>

            <div className="projects-container">
                <div className="projects-text" id="projects">
                    PROJECTS
                </div>
                <div className="projects-grid">
                    <div className="projects-item">
                        <Link to="/personal-info/project1/#project"><img className="projects-img" src={p1} alt="Project1" /></Link>
                        <div className="projects-itemtext">Biped: Self-Balancing System</div>
                    </div>
                    <div className="projects-item">
                        <Link to="/personal-info/project2/#project"><img className="projects-img" src={mirror} alt="Project2" /></Link>
                        <div className="projects-itemtext">Home Monitoring Mirror</div>
                    </div>
                    <div className="projects-item">
                        <img className="projects-img" src={defa} alt="Project1" />
                        <div className="projects-itemtext">img2 content</div>
                    </div>
                    <div className="projects-item">
                        <img className="projects-img" src={defa} alt="Project1" />
                        <div className="projects-itemtext">img2 content</div>
                    </div>
                    <div className="projects-item">
                        <img className="projects-img" src={defa} alt="Project1" />
                        <div className="projects-itemtext">img2 content</div>
                    </div>
                </div>
            </div>

            <div className="contact-container">
                <div className="projects-text" id="contact">
                    CONTACT
                </div>
                <form id="form" className="form" method="post" onSubmit={handleSubmit} onReset={handleReset}>
                    <div className="form-grid">
                        <div className="input-field">
                            <label htmlFor="fname">FIRST NAME *</label>
                            <input className="input" type="text" id="fname" name="from_name_first" value={toSend.from_name_first} onChange={handleChange} required ></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lname">LAST NAME</label>
                            <input className="input" type="text" id="lname" name="from_name_last" value={toSend.from_name_last} onChange={handleChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">EMAIL ADDRESS *</label>
                            <input className="input" type="email" id="email" name="from_email" value={toSend.from_email} onChange={handleChange} required ></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="country">COUNTRY</label>
                            <input className="input" type="text" id="country" name="country"></input>
                        </div>

                    </div>
                    <div className="message-field">
                        <label htmlFor="message">MESSAGE *</label>
                        <textarea className="message" name="message" placeholder="Hello! I like your website." value={toSend.message} onChange={handleChange} required >
                        </textarea>
                    </div>
                    <div className="submit-container">
                        <input className="submit" type="reset" value="Reset"></input>
                        <input className="submit" type="submit" value="Submit"></input>
                    </div>
                    <div className="popup-field">
                        <label htmlFor="message">{toSend.messageSent}</label>
                    </div>
                </form>
            </div>
            <div className="footer">
                {/* <h1> hello, {formatName(user1)} !</h1> */}
                <h1> Hello {toSend.from_name_first}!</h1>
                <h4> {new Date().toLocaleTimeString()}.</h4>
            </div>
        </div>
    );
};


var slideIndex = 1;
const picNum = 3;
var dots;

// Next/previous controls
function minusSlides() {
    dots = document.getElementsByClassName("dot");
    dots[slideIndex - 1].className = "dot";
    slideIndex = (slideIndex - 1) % picNum;
    if (slideIndex === 0) {
        slideIndex = picNum;
    }
    showSlides();
}

function plusSlides() {
    dots = document.getElementsByClassName("dot");
    dots[slideIndex - 1].className = "dot";
    slideIndex = slideIndex % picNum + 1;
    showSlides();
}

function showSlides() {
    if (dots != null) {
        dots[slideIndex - 1].className = "dot active";
    }
    if (slideIndex === 1) {
        return pic1;
    }
    if (slideIndex === 2) {
        return pic2;
    }
    return pic3;
}

export default Home;