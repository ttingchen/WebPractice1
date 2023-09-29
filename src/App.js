import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import Layout component
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import React from 'react';
import Project from './components/Project';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/personal-info/about" element={<About />} />
            <Route path="/personal-info/project1" element={<Project
              title={"Biped: Two-Wheeled Self-Balancing System"}
              date={{
                start: "Feb. 2023",
                end: "May. 2023"
              }}
              description={"A semester-long project focusing on both the hardware \
              and the software of a custom two-wheeled self-balancing robot and ultimately \
              make the two-wheeled system balance itself, as well as command the system to maneuver around."}
              youtubeID={"guyPOgvUr6w"}
            />} />
            <Route path="/personal-info/project2" element={<Project
              title={"Home Monitoring Smart Mirror with Face Recognition"}
              date={{
                start: "Nov. 2022",
                end: "Dec. 2022"
              }}
              description={"A personal project aims to find out if I need to wake my roommate up for dinner."}
              link={<a href="https://drive.google.com/file/d/11bsUL7rB5JtcEluJ48OGvEJFeWey0mxN/view?usp=sharing" className="nav-item">More</a>}
              youtubeID={"9SN5asihv-g"}
            />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
