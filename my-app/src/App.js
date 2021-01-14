import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class='App'>
      <div class='App-header'>
        <div>LOGO</div>

        <div>
          <nav>
          <a href="/projects/" class="nav-item">PROJECTS</a>
          <a href="/studio/" class="nav-item">STUDIO</a>
          </nav>
        </div>

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
