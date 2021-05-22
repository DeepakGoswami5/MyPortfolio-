import React from 'react'
import "./HomePage.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';
const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="main-header">
                <h1 className="hero-text"> Hi, I'am 
                    <span> Deepak Goswami</span>
                </h1>
                <p className="a-subtext"> 
                    LoreFugiat voluptate aliqua mollit adipisicing ullamco eu 
                    fugiat ea id eu laboris enim qui.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon className="icon gt" icon={faGithubAlt} />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon className="icon lin" icon={faLinkedinIn} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
