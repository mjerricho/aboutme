import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/LandingComponent';
import AboutMe from './components/AboutMeComponent';
import MainWork from './components/MainWorkComponent'
import WorkExp from './components/WorkExpComponent';
import Projects from './components/ProjectsComponent';
import Achievements from './components/AchievementsComponent';
import Others from './components/OthersComponent';
import Artworks from './components/ArtworksComponent';
import Footer from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <AboutMe />
      <Projects />
      <MainWork />
      <WorkExp />
      <Achievements />
      <Others />
      <Artworks />
      <Footer />
    </div>
  );
}

export default App;
