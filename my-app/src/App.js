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
import React, { Component } from 'react';
import Project1 from './components/Project1';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project1" element={<Project1 />} />
            <Route path="*" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
