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
                <h4>I am <span>Lorem</span></h4>
                <p>Sint labore aute do cupidatat.</p>
            </div>
            <div className="about-details"> 
                <div className="name-details">
                    <p>Full name    :</p>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="name-details">
                    <p>Age    :</p>
                    <p>25</p>
                </div>
                <div className="name-details">
                    <p>Narionality    :</p>
                    <p>Indian</p>
                </div>
                <div className="name-details">
                    <p>Languages    :</p>
                    <p>Hindi, English</p>
                </div>
            </div>
        </div>
    )
}

export default ImageSection
