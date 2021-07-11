import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Clips from "./components/clips/Clips";
import Stats from "./components/stats/Stats";
import Reviews from "./components/reviews/Reviews";
import "./app.scss"

function App() {

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
