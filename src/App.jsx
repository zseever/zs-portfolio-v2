import './App.css';
import Projects from './components/Projects';
import Jobs from './components/Jobs';
import AboutDetail from './components/AboutDetail';
import Socials from './components/Socials';
import MainButtons from './components/MainButtons';
import TitleDetail from './components/TitleDetail';

export default function App() {

  return (
    <div className="App">
      <div className="main-cont cursor">
        <div className="sub-cont left-sub-cont">
          <div className="about-cont flex-col">
            <TitleDetail />
            <MainButtons />
            <Socials />
          </div>
        </div>
        <div className="sub-cont">
          <div className="experience-cont flex-col">
            <AboutDetail />
            <Jobs />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

