/* import { Routes, Route } from "react-router-dom"; */
import Header from "./Components/Header/header";

/* import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Web from "./Pages/Projects/Web";
import Landing from "./Pages/Projects/Landing"
import Games from './Pages/Projects/Games'
import Contact from "./Pages/Contact"; */
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";


function App() {
  const personalDetails = {
    name: "William Berbet",
    location: "Limeira, SP",
    email: "wiiliamb@hotmail.com",
    availability: "Aberto a novas experiências",
    brand: "Amante de frango frito, música e muai thay! Eu crio sites responsivos que são rápidos, fáceis de usar e construídos com as melhores práticas. A principal área de minha especialização é desenvolvimento front-end com HTML, CSS & JS na criação de aplicativos da Web. Também tenho praticado a criação de aplicativos mobile Android e iOs através do React Native."
  };


  return (
    <div>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/web" element={<Web />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>*/}
    </div>
  );
}

export default App;
