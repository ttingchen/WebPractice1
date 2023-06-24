import React from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Layout = () => {

    return (
        <div>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav> */}


            <div className='App-header'>
                <div>LOGO</div>
                <div>
                    <nav>
                        <Link className="nav-item" to="/">HOME</Link>
                        <Link className="nav-item" to="/#projects">PROJECTS</Link>
                        <Link className="nav-item" to="/#contact">CONTACT</Link>
                        {/* <a href="/" className="nav-item">HOME</a>
                        <a href="/#projects" className="nav-item">PROJECTS</a>
                        <a href="/#contact" className="nav-item">CONTACT</a> */}

                    </nav>
                </div>
            </div>
            <Outlet />


        </div>
    )
};
export default Layout;