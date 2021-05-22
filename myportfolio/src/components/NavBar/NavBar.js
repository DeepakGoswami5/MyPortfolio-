import React from 'react'
import avatar from '../../images/avatar.jpg';
import {NavLink} from 'react-router-dom';
import "./NavBar.scss"
const navBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/experience" exact activeClassName="active">
                            Experience
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/work" exact activeClassName="active">
                            Work
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/resume" exact activeClassName="active">
                            Resume
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>Lorem</p>
                </footer>
            </nav>
        </div>
    )
}

export default navBar
