import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Work from "./components/Work";
import 'tw-elements';


function App() {
  
  return (
    <div>
      <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
