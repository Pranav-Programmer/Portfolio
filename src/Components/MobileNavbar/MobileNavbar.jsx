import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import './MobileNavbar.css'
import { Link } from "react-scroll";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import CV from "../../img/cv.png";

function MobileNavbar() {
  return (
    <Menu>
    <div className='n-wrapper2'>
      <div className="up">
        <div className="n-name">Pranav</div>
        {/* <Toggle/> */}
        </div>
        <div className="n-list2">
            <ul style={{listStyleType:'none'}}>
            <li>
              <Link to="Intro" spy={true} smooth={true} onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skill" spy={true} smooth={true} onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
                Skill
              </Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true} onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
                Project
              </Link>
            </li>
            <li>
              <Link to="Experience" spy={true} smooth={true} onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
              Experience
              </Link>
            </li>
            </ul>
            
        </div>
        <Link to="contact" spy={true} smooth={true} onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
        <button className='button n-button'>
            Contact
        </button>
        </Link>
        <div className="s-icons" style={{marginLeft:'-3.5rem'}}>
          <a href="https://drive.google.com/file/d/1oAJLQR9DvUEdxBCpe6TuleInk0yc-hBI/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={CV} alt=""/></a> 
          <a href="https://github.com/Pranav-Programmer" target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/pranav-dharme/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="" /></a>     
          {/* <a href={Resume} download><img src={Download} alt=""/></a> */}
        </div>
        </div>
  </Menu>
  )
}

export default MobileNavbar

