import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
    <>
        <IconContext.Provider value={{ color: '#f1f1f1ff' }}>
            <div id='navbar'>
                <FaIcons.FaBars size={30} onClick={showSidebar} id="sidebar-button"/>
                <span id="navbar-name" onClick={scrollToTop}>Marcellinus Jerricho</span>
            </div>
            <nav className={sidebar ? 'nav-sidebar-menu active' : 'nav-sidebar-menu'}>
            <ul className='nav-sidebar-menu-items' onClick={showSidebar}>
                <li className='nav-sidebar-toggle'>
                    <AiIcons.AiOutlineClose size={30} onClick={showSidebar} id="nav-sidebar-cross-button"/>
                </li>
                {SidebarData.map((item, index) => {
                return (
                    <motion.li key={index} className={item.cName} whileTap={{ scale: 0.8 }}>
                        <Link 
                        activeClass="active"
                        to={item.elementId}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={showSidebar}>
                            {item.icon}
                            <span className="nav-sidebar-text-span">{item.title}</span>   
                        </Link>                    
                    </motion.li>
                );
                })}
            </ul>
            </nav>
        </IconContext.Provider>
    </>
    );
}

export default Navbar
