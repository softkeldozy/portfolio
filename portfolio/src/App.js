import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import { Particles } from "react-tsparticles";

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
