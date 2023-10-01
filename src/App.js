import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom/";
import Home from './components/Home'
import Projects from "./components/Projects";
import './index.css'
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import Contact from "./components/Contact";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-M5SB9301K5"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />}/>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
