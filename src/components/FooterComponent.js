import React from 'react'
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import resume from '../assets/pdf/resume_marcellinus-jerricho.pdf';

function Footer() {
    return (
        <div id="section-find-me">
            <IconContext.Provider value={{ color: '#f1f1f1ff' }}>
                <div className="section-footer">
                    <span>Find me at </span>
                    <a href="https://www.linkedin.com/in/mjerricho/" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillLinkedin size={25}/></a>
                    <a href="https://github.com/mjerricho" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub size={25}/></a>
                    <a href="https://drive.google.com/drive/folders/1x_kigcNhVrcQp4sR8zIbHwJaQyKoiwn6?usp=sharing" target="_blank" rel="noopener noreferrer"><FaIcons.FaGoogleDrive size={25}/></a>
                    <span><AiIcons.AiFillInstagram size={28}/>: @jerpret</span>
                    <span><AiIcons.AiFillMail size={25}/>: Marcellinus.jerricho@gmail.com</span>
                    <a href={resume} download>Resume</a>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Footer