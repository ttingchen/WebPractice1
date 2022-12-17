import './App.css';
import pic1 from './assets/737.jpg';
import pic2 from './assets/861.jpg';
import pic3 from './assets/687951.jpg';
import p1 from './assets/p1.jpg';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div>LOGO</div>
        <div>
          <nav>
          <a href="#projects" className="nav-item">PROJECTS</a>
          <a href="#contact" className="nav-item">CONTACT</a>
          </nav>
        </div>
      </div>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img className="slide-img" src={showSlides()} alt="Picture1"/>
        </div>
        <div className="dot-container">
          <span className="dot active"></span> 
          <span className="dot"></span> 
          <span className="dot"></span> 
        </div>

        <a className="prev" onClick={minusSlides}>&#10094;</a>
        <a className="next" onClick={plusSlides}>&#10095;</a>
      </div>

      <div className="projects-container">
        <div className="projects-text" id="projects">
          PROJECTS
        </div>
        <div className="projects-grid">
          <div className="projects-item">
            <img className="project-img" src={p1} alt="Project1"/>
            <div className="projects-itemtext">img content</div>
          </div>
          <div className="projects-item">
            <img className="project-img" src={p1} alt="Project1"/>
            <div className="projects-itemtext">img2 content</div>
          </div>
          <div className="projects-item">
            <img className="project-img" src={p1} alt="Project1"/>
            <div className="projects-itemtext">img2 content</div>
          </div>
          <div className="projects-item">
            <img className="project-img" src={p1} alt="Project1"/>
            <div className="projects-itemtext">img2 content</div>
          </div>
          <div className="projects-item">
            <img className="project-img" src={p1} alt="Project1"/>
            <div className="projects-itemtext">img2 content</div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="projects-text" id="contact">
          CONTACT
        </div>
        <div className="form">
          <div className="form-grid">
            <div className="input-field">
              <label htmlFor="fname">FIRST NAME</label>
              <input className="input" type="text" id="fname" name="fname"></input>
            </div>
            <div className="input-field">
              <label htmlFor="lname">LAST NAME</label>
              <input className="input" type="text" id="lname" name="lname"></input>
            </div>
            <div className="input-field">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input className="input" type="text" id="email" name="email"></input>
            </div>
            <div className="input-field">
              <label htmlFor="country">COUNTRY</label>
              <input className="input" type="text" id="country" name="country"></input>
            </div>

          </div>
          <div className="message-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea className="message" name="message" placeholder="The cat was playing in the garden.">
            </textarea>
          </div>
          <div className="submit-container">
            <input className="submit" type="submit" value="Submit"></input>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1> hello, {formatName(user1)} !</h1>
        <h4> { new Date().toLocaleTimeString()}.</h4>
      </div>
    </div>
  );
}

function formatName(user) {
  return user.firstName + user.lastName;
  //`${user.firstName} ${user.lastName}`
}

const user1 = {
  firstName: 'ttt',
  lastName: 'ing'
};

var slideIndex = 1;
const picNum = 3;
var dots;

// Next/previous controls
function minusSlides() {
  dots = document.getElementsByClassName("dot");
  dots[slideIndex-1].className="dot";
  slideIndex = (slideIndex - 1) % picNum;
  if(slideIndex === 0){
    slideIndex = picNum;
  }
  showSlides();
}

function plusSlides() {
  dots = document.getElementsByClassName("dot");
  dots[slideIndex-1].className="dot";
  slideIndex = slideIndex % picNum + 1;
  showSlides();
}

function showSlides() {
  if(dots!=null){
    dots[slideIndex-1].className="dot active";
  }
  if(slideIndex === 1){
    return pic1;
  }
  if(slideIndex === 2){
    return pic2;
  }
  return pic3;
}


export default App;
