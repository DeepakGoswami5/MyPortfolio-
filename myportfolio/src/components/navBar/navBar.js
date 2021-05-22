import React from 'react'
import logo from '../../assest/image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/navbar"><img className="logo" src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/navbar">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/navbar">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/navbar">Work</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="/navbar">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/navbar">Resume</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navBar;