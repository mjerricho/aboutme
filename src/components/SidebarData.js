import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    id: 1,
    title: 'About Me',
    elementId: 'section-about-me',
    icon: <IoIcons5.IoPersonCircle/>,
    cName: 'nav-sidebar-text'
  },
  {
    id: 2,
    title: 'Projects',
    elementId: 'section-projects',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-sidebar-text'
  },
  {
    id: 3,
    title: 'Work Experience',
    elementId: 'section-workexp',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-sidebar-text'
  },
  { id: 4,
    title: 'Achievements',
    elementId: 'section-achievements',
    icon: <GiIcons.GiAchievement/>,
    cName: 'nav-sidebar-text'
  },
  {
    id: 5,
    title: 'Others',
    elementId: 'section-others',
    icon: <GiIcons.GiTopHat/>,
    cName: 'nav-sidebar-text'
  },
  {
    id: 6,
    title: 'Find me',
    elementId: 'section-find-me',
    icon: <AiIcons.AiFillMail />,
    cName: 'nav-sidebar-text'
  }
];