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
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <ParticlesBg />
      <Navbar />
      <Header />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
