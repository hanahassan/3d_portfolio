import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className = "font-medium sm: text-x1 text-center">{text}</p>
        <Link to={link} className = "neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = { 
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-pink py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Hana </span>👋
        <br/>
        A Software Engineer studying 
        <br/>
        at the University of Calgary 🏫
        </h1>    ),
    2: (
        <InfoBox 
        text = "I'm currently a third year Software Engineering, and part of Schulich Space Rover Team and Blockchain Society. I am also conducting research in Decentralized Finance."
        link = "/about"
        btnText="Click to Learn More"
        />
    ),
    3: (
        <InfoBox 
        text = "I've got the chance to create multiple projects and refine my skills for the past few years, which I'd love for you to check out!"
        link = "/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text = "Want to learn more? Feel free to contact me!"
        link = "/contact"
        btnText="Let's talk"
        /> 
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo