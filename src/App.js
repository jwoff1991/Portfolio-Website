import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom/";
import Home from './components/Home'
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import './index.css'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
