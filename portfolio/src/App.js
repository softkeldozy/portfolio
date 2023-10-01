import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ParticlesBg from './components/particlesBg';
import AboutMe from './components/About/AboutMe';
import Skill from './components/Skill/Skill';
function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Header />
      <AboutMe />
      <Skill />
    </>
  );
}

export default App;
