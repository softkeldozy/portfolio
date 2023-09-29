import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ParticlesBg from './components/particlesBg';
function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
