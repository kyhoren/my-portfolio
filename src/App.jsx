import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Clips from "./components/clips/Clips";
import Stats from "./components/stats/Stats";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import "./app.scss"


function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Clips />
        <Stats />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}

export default App;
