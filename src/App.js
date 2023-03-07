import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Web from "./Pages/Projects/Web";
import Landing from "./Pages/Projects/Landing"
import Games from './Pages/Projects/Games'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/web" element={<Web />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
