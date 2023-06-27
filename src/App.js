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
          <Route path="/personal-info" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/personal-info/about" element={<About />} />
            <Route path="/personal-info/project1" element={<Project1 />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
