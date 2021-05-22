import React from 'react'
import './AboutPage.scss'
import Title from '../../components/Title/Title'
import ImageSection from '../../components/ImageSection/ImageSection'

const AboutPage = () => {
    return (
        <div>
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection/>
        </div>
    )
}

export default AboutPage
