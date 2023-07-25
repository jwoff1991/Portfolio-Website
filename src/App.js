import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom/";
import Home from './components/Home'
import Projects from "./components/Projects";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
      <Navigation />

      <h1>Welcome to my portfolio</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
