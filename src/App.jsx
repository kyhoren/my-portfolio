import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Clips from "./components/clips/Clips";
import Stats from "./components/stats/Stats";
import Reviews from "./components/reviews/Reviews";
import "./app.scss"

function App() {

  //Observer to see if the scrolling ever crosses into a gray page
  var observer = new IntersectionObserver(
    function(entries){
      entries.forEach(entry => {
        if (entry.isIntersecting){          //If in portfolio or stats section, change to 'active' css
          nav.classList.add('active');
          midnav.classList.add('active');
          rightnav.classList.add('active');
        } else if (!entry.isIntersecting){  //Otherwise change back to 'normal' css
          nav.classList.remove('active');
          midnav.classList.remove('active');
          rightnav.classList.remove('active');
        }

      });
    }
  , {threshold: 0.5});    //Changes how much of the observed component has to be on screen to be 'seen'

  //Keep track of the refs
  var port, sts;
  var nav, midnav, rightnav;

  //Delay setting the refs until all the components are loaded
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

    //Watch the portfolio section and stats section
    observer.observe(port);
    observer.observe(sts);
  }
  checkLoaded();

  return (
    <div className="app">
      <NavBar />

      <div className="sections">
        <Home />
        <Portfolio />
        <Clips />
        <Stats />
        <Reviews />
      </div>
    </div>
  );
}

export default App;
