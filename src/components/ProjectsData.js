import projectautoware from '../assets/images/projects/projects-autoware.png';
import projectwater from '../assets/images/projects/projects-water.png';
import projectpolitics from '../assets/images/projects/projects-politics.jpg';

export const ProjectsData =[
    {
        id: 1,
        title: "Analysing the dataflow of Autoware",
        subtitle: "An exploration into the dataflow and determinism of Autoware, an open-source autonomous driving technology",
        description: "I investigated how Autoware, an “All-in-One” open-source software for autonomous driving technology, utilises Robot Operating System (ROS), a flexible framework for writing robot software, to manage the dataflow within its program. Autoware is built on ROS, where there are nodes that communicate with each other either periodically (time-triggered) or sequentially (data-driven). My role is to look deep into the source code to determine the methods at which the nodes communicate and the functions they perform. From these efforts to better understand the particularities of robotics frameworks, we hope to develop tools that will help to optimise robotics software in the future.",
        picture: projectautoware,
        link: "https://github.com/SamKouteili/ROSModelling.git"
    },
    {
        id: 2,
        title: "Research on Ethnic Politics in Southeast Asia",
        subtitle: "An exploration into the impact of ethnicity on politics in Indonesia by applying Natural Language Processing on politicians' speeches.",
        description: "My role was to obtain and verify data on major elections results in Indonesia to be used in R. I explored Indonesian government and news websites to look into politicians' details from different areas of the country. I applied text mining to debates data to generate word cloud and statistical analysis. I used Topic Modelling using Natural Language Processing packages in R to analyse the relationship between the semantics and the lexicon of the terms the politicians used. I also use term frequency–inverse document frequency (tf-idf) to look at the relevant words that the politicians use. On top of that, I analysed the speech in word bigrams to observe the frequency and relationship of consecutive words. I also performed data scraping to get more information about the politicians. The scripts I wrote enabled analysis that would otherwise be extremely difficult with manual analysis. As I am still working on this project, the Professor in charge of this project prohibit me from sharing the work.",
        picture: projectpolitics,
        link: ""
    },
    {
        id: 3,
        title: "Machine-Learning Investigation of the Geometry of Molecular Arrangement in Liquid Water",
        subtitle: "An exploration into the possible substates of liquid water through the application of unsupervised learning on the geometry of its molecular arrangement",
        description: "My role was to produce a Python Machine Learning code (unsupervised learning) that would identify clusters of states of water based on their molecular properties. I employed Scikit-Learn, Pandas, Seaborn and Matplotlib library to process and visualise data into clusters. We found intriguing evidence that there might be 2 separate sub-states in the liquid state. The project was ended early due to the Professor's other commitments.",
        picture: projectwater,
        link: "https://github.com/mjerricho/research-water.git"
        }
];