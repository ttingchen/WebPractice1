import logo from './logo.svg';
import './App.css';
import pic1 from './assets/737.jpg';
import pic2 from './assets/861.jpg';
import pic3 from './assets/687951.jpg';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div>LOGO</div>
        <div>
          <nav>
          <a href="/projects/" className="nav-item">PROJECTS</a>
          <a href="/studio/" className="nav-item">STUDIO</a>
          </nav>
        </div>
      </div>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img className="slide-img" src={showSlides()} alt="Picture1"/>
          <div className="text">{showSlides()}</div>
        </div>

        <a className="prev" onClick={minusSlides}>&#10094;</a>
        <a className="next" onClick={plusSlides}>&#10095;</a>
      </div>

      <div className="Sec-picture">
        first part
      </div>
      <h1> hello, {formatName(user)} !</h1>
      <h2> It is { new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

function formatName(user) {
  return user.firstName + user.lastName;
  //`${user.firstName} ${user.lastName}`
}

const user = {
  firstName: 'ttt',
  lastName: 'ing'
};

var slideIndex = 1;

// Next/previous controls
function minusSlides() {
  slideIndex = (slideIndex - 1) % 3;
  if(slideIndex == 0){
    slideIndex = 3;
  }
  showSlides();
}

function plusSlides() {
  slideIndex = slideIndex % 3 + 1;
  showSlides();
}

function showSlides() {
  if(slideIndex == 1){
    return pic1;
  }
  if(slideIndex == 2){
    return pic2;
  }
  return pic3;
}


export default App;
