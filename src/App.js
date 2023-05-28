import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Web from "./Pages/Projects/Web";
import Landing from "./Pages/Projects/Landing"
import Games from './Pages/Projects/Games'
import Contact from "./Pages/Contact";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";


function App() {
  const personalDetails = {
    name: "Michael Yeates",
    location: "Loughborough, UK",
    email: "michael-yeates@outlook.com",
    availability: "Open for work",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };


  return (
    <div>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/web" element={<Web />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
