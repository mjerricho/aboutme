import projectautoware from '../assets/images/projects/projects-autoware.png';
import projectwater from '../assets/images/projects/projects-water.png';
import projectpolitics from '../assets/images/projects/projects-politics.jpg';
import projectpl from "../assets/images/projects/projects-pl.png";
import projectbirdy from "../assets/images/projects/projects-birdy.png";
import projectdining from "../assets/images/projects/projects-dining.png";
import projectcitizen from "../assets/images/projects/projects-citizen.png";
import projectautocorrect from "../assets/images/projects/projects-autocorrect.png"

export const ProjectsData =[
    {
        id: 1,
        title: "Yale-NUS College Dining Menu Web Scraper and Bot",
        subtitle: "Providing daily updates on Yale-NUS College dining hall menu.",
        description: "This is a YNC Makerthon Avant-Garde winning idea. We pioneered a web scraper that extracts meals and nutrition content from dining menu website. We developed a Telegram bot to broadcast daily menu updates for the channel of over 300 people. This program skipped the login and searching process, saving at least 15 clicks (5 minutes) for every subscriber.",
        picture: projectdining,
        link: "https://github.com/mjerricho/ync-dining-hall-menu"
    },
    {
        id: 2,
        title: "Autocorrect in Python",
        subtitle: "A proof-of-concept autocorrect program written entirely in Python.",
        description: "This project is part of our Intro to Python class final project. We implemented the autocorrect using two main components, which are (1) the generation of all possible autocorrect word (with a threshold setting for edit distance) which is all in the WordProcessing.py file and (2) the ranking of all possible autocorrect using frequency and edit distance which is all in the ProbabilisticPredictions.py.",
        picture: projectautocorrect,
        link: "https://github.com/sewenthy/python-group-auto-correct.git"
    },
    {
        id: 3,
        title: "Yale-NUS College Citizen Science",
        subtitle: "Extending the field of life science to everyone",
        description: "I engineered a program that extracts necessary metadata from over 10 000 videos to be uploaded into iNaturalist, a well-known citizen science platform. I am currently building a platform for automatic storage and upload of animal observations into iNaturalist for future research. This project is is necessary because iNaturalist does not allow video uploads, which hinders the work of researcher working with videos.",
        picture: projectcitizen,
        link: "https://github.com/mjerricho/citizen-science-ync.git"
    },
    {
        id: 4,
        title: "Birdy: A Text Messaging App",
        subtitle: "An implementation of a text messaging app using ReactJS and Firebase.",
        description: "I implemented a text messaging app that used no SQL and hosted on Firebase. I used reactJS to build the application's front-end and Firebase JavaScript v9.6.2 to handle its back end. I utilised Firestore database and its API to enable a realtime update of the app. It enables users to login using their Google account. Features include a chat room creation and search capability.",
        picture: projectbirdy,
        link: "https://birdy-de2d0.web.app"
    },
    {
        id: 5,
        title: "Investigation on Perceptual Learning",
        subtitle: "An investigation into how training improves our ability in a specific task.",
        description: "I provide JavaScript technical assistance and maintenance for the various online experiemnt tools. Moreover, I also implemented an offline Perceptual Learning experiment tool using PsychoPy and Pandas in Python as a back up for the online tool. This initiative increased the resilience of the study, especially given that we are using expensive MRI Scanner on a very limited number of experiementees under a very tight working schedule.",
        picture: projectpl,
        link: "https://github.com/mjerricho/curate-pl-offline"
    },
    {
        id: 6,
        title: "Analysing the dataflow of Autoware",
        subtitle: "An exploration into the dataflow and determinism of Autoware, an open-source autonomous driving technology",
        description: "I investigated how Autoware, an “All-in-One” open-source software for autonomous driving technology, utilises Robot Operating System (ROS), a flexible framework for writing robot software, to manage the dataflow within its program. Autoware is built on ROS, where there are nodes that communicate with each other either periodically (time-triggered) or sequentially (data-driven). My role is to look deep into the source code to determine the methods at which the nodes communicate and the functions they perform. From these efforts to better understand the particularities of robotics frameworks, we hope to develop tools that will help to optimise robotics software in the future.",
        picture: projectautoware,
        link: "https://github.com/SamKouteili/ROSModelling.git"
    },
    {
        id: 7,
        title: "Research on Ethnic Politics in Southeast Asia",
        subtitle: "An exploration into the impact of ethnicity on politics in Indonesia by applying Natural Language Processing on politicians' speeches.",
        description: "My role was to obtain and verify data on major elections results in Indonesia to be used in R. I explored Indonesian government and news websites to look into politicians' details from different areas of the country. I applied text mining to debates data to generate word cloud and statistical analysis. I used Topic Modelling using Natural Language Processing packages in R to analyse the relationship between the semantics and the lexicon of the terms the politicians used. I also use term frequency–inverse document frequency (tf-idf) to look at the relevant words that the politicians use. On top of that, I analysed the speech in word bigrams to observe the frequency and relationship of consecutive words. I also performed data scraping to get more information about the politicians. The scripts I wrote enabled analysis that would otherwise be extremely difficult with manual analysis. As I am still working on this project, the Professor in charge of this project prohibit me from sharing the work.",
        picture: projectpolitics,
        link: "https://github.com/mjerricho/research-ethnic-politics-sea"
    },
    {
        id: 8,
        title: "Machine-Learning Investigation of the Geometry of Molecular Arrangement in Liquid Water",
        subtitle: "An exploration into the possible substates of liquid water through the application of unsupervised learning on the geometry of its molecular arrangement",
        description: "My role was to produce a Python Machine Learning code (unsupervised learning) that would identify clusters of states of water based on their molecular properties. I employed Scikit-Learn, Pandas, Seaborn and Matplotlib library to process and visualise data into clusters. We found intriguing evidence that there might be 2 separate sub-states in the liquid state. The project was ended early due to the Professor's other commitments.",
        picture: projectwater,
        link: "https://github.com/mjerricho/research-water.git"
        }
];