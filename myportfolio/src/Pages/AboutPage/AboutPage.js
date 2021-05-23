import React from 'react';
import './AboutPage.scss';
import Title from '../../components/Title/Title';
import ImageSection from '../../components/ImageSection/ImageSection';
import SkillSection from '../../components/SkillSection/SkillSection';

const AboutPage = () => {
    return (
        <div>
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skills-container">
                <SkillSection skill={'JavaScript'} progress={'50%'} width={"50%"}/>
                <SkillSection skill={'Python'} progress={'70%'} width={"70%"}/>
                <SkillSection skill={'React.js'} progress={'40%'} width={"40%"}/>
                <SkillSection skill={'C++'} progress={'70%'} width={"70%"}/>
            </div>
            
        </div>
    )
}

export default AboutPage
