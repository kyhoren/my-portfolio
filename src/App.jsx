import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Clips from "./components/clips/Clips";
import Stats from "./components/stats/Stats";
import Reviews from "./components/reviews/Reviews";
import { useState } from 'react';
import "./app.scss"


function App() {

  /*
    Keep track of the status of the video player in order to implement the auto-pause/resume functionality.
  */
  const [vidPlaying, setPlayStatus] = useState(false);  //Status of whether a video is playing or not

  
  //-------------------------------------------------------------------------------------------------------------//


  /* 
    Make two intersection observers, one to watch the portfolio section, and one to watch the stats section (the gray pages).
    Split up the intersection observers to add auto pausing for video in portfolio section more easily.
  */
  var portObserver = new IntersectionObserver(
  function(entries){
    entries.forEach(entry => {
      if (entry.isIntersecting){          //If in the portfolio section, change to 'active' css
        nav.classList.add('pActive');
        midnav.classList.add('pActive');
        rightnav.classList.add('pActive');

        /* AUTO-RESUME */
        /* If the video is NOT PLAYING and PORTFOLIO section is in view, auto resume. */
        /****************** CURRENTLY DISABLED DUE TO NOT BEING ABLE TO PAUSE **********************/
        if (!vidPlaying && entry.target.className === "portfolio false"){ //'portfolio false' when not 'active'
          // console.log("Video is NOT playing, but is in view.");
          //setPlayStatus(true);
        }

      } else if (!entry.isIntersecting){  //Otherwise change back to 'normal' css
        nav.classList.remove('pActive');
        midnav.classList.remove('pActive');
        rightnav.classList.remove('pActive');

        /* AUTO-PAUSE */
        /* If the video IS PLAYING but PORTFOLIO section is NOT IN VIEW, auto pause. */
        if (vidPlaying && entry.target.className !== "portfolio pActive"){
          // console.log("Video IS playing, but is NOT in view. AUTO PAUSE!");
          setPlayStatus(false);
        }

      }
    });
  }, {threshold: 0.5});    //Changes how much of the observed component has to be on screen to be 'seen'

  var statsObserver = new IntersectionObserver(
    function(entries){
      entries.forEach(entry => {
        if (entry.isIntersecting){          //If in the portfolio section, change to 'active' css
          nav.classList.add('sActive');
          midnav.classList.add('sActive');
          rightnav.classList.add('sActive');

          // console.log("Stats adding 'sActive'");
        } else if (!entry.isIntersecting){  //Otherwise change back to 'normal' css
          nav.classList.remove('sActive');
          midnav.classList.remove('sActive');
          rightnav.classList.remove('sActive');

          // console.log("Stats removing 'sActive'");
        }
      });
  }, {threshold: 0.5});    //Changes how much of the observed component has to be on screen to be 'seen'


  //-------------------------------------------------------------------------------------------------------------//


  /*
    Get the references to the sections in question and to the NavBar component containers for CSS manipulation.
    Also set the observers to observe their specified section.
  */
  var port, sts, nav, midnav, rightnav;

  function checkLoaded(){
    port = document.querySelector('#portfolio');
    sts = document.querySelector('#stats');
    nav = document.querySelector('#nav');
    midnav = document.querySelector('#midnav');
    rightnav = document.querySelector('#rightnav');

    if (!port || !sts || !nav){
      window.setTimeout(checkLoaded, 500);
      return;
    }

    //Make observers watch their sections
    portObserver.observe(port);
    statsObserver.observe(sts);
  }
  checkLoaded();


  //-------------------------------------------------------------------------------------------------------------//


  return (
    <div className="app">
      <NavBar />

      <div className="sections">
        <Home />
        <Portfolio vidPlaying={vidPlaying} setPlayStatus={setPlayStatus} />
        <Clips />
        <Stats />
        <Reviews />
      </div>
    </div>
  );
}

export default App;
