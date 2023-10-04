import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ParticlesBg from './components/particlesBg';
import AboutMe from './components/About/AboutMe';
import Skill from './components/Skill/Skill';
import { BrowserRouter } from 'react-router-dom'
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
function App() {
  return (
    <BrowserRouter>
      <ParticlesBg />
      <Navbar />
      <Header />
      <AboutMe />
      <Skill />
      <Contact />
      <Project />
    </BrowserRouter>
  );
}

export default App;
