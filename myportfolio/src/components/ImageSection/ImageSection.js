import React from 'react';
import './ImageSection.scss';
import about from '../../images/avatar.jpg';
const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about}></img>
            </div>
            <div className="about-info">
                <h4>I am <span>Deepak Goswami</span></h4>
                <p className="about-text">Sint labore aute do cupidatat Sint labore aute do cupidatat Sint labore aute do cupidatat Sint labore aute do cupidatat.</p>
                <div className="about-details"> 
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Address</p>
                        <p>Nationality</p>
                        <p>Launguage</p>
                    </div>
                    <div className="right-section">
                        <p>: Deepak goswami</p>
                        <p>: 25</p>
                        <p>: 65 Shree Ram Nagar</p>
                        <p>: Indian</p>
                        <p>: Hindi, English</p>
                    </div>
                </div>
                <button className="btn">Download Resume</button>
            </div>
        </div>
    )
}

export default ImageSection
