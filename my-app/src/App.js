import logo from './logo.svg';
import './App.css';

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


export default App;
