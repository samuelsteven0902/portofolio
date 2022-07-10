import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";   
import Portfolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Work from "./components/Work";
import 'tw-elements';
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";


const Fullpage = () => (
  
     
  <ReactFullpage
  anchors= {["home", "about", "skills", "work", "portfolio" , "contact"]}
    navigation 
    navigationTooltips= {["home", "about", "skills", "work", "portfolio" , "contact"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
   
    

      return (
        <div>
          <Home />
          <About />
          <Skills />
          <Portfolio/>
          <Work />
          <Contact />
        </div>
      );
    }}
  />
);
export default Fullpage;





