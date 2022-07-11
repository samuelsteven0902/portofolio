import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";   
import Portfolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Work from "./components/Work";
import 'tw-elements';
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import 'fullpage.js/dist/fullpage.extensions.min.js';
import { Controller, Scene } from 'react-scrollmagic';




const Fullpage = () => (
  
     
  <ReactFullpage
  scrollBar
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
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
              <Home />
            </Scene>
            <Scene pin>
              <About />
            </Scene>
            <Scene pin>
              <Skills />
            </Scene>
            <Scene pin>
              <Portfolio/>
            </Scene>
            <Scene pin>
              <Work />
            </Scene>
            <Scene pin>
              <Contact />
            </Scene>
          </Controller>
        
        </div>
      );
    }}
  />
);
export default Fullpage;





