import "./portfolio.scss"
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';

export default function Portfolio({ vidPlaying, setPlayStatus }) {
    
    /*
        Get the references to the sections in question and to the NavBar component containers for CSS manipulation.
    */
    var nav, midnav, rightnav;
    function checkLoaded(){
        nav = document.querySelector('#nav');
        midnav = document.querySelector('#midnav');
        rightnav = document.querySelector('#rightnav');
    
        if (!nav){
          window.setTimeout(checkLoaded, 500);
          return;
        }
    }
    checkLoaded();

    
    //-------------------------------------------------------------------------------------------------------------//


    /* 
        Set the state of the NavBar in the appropriate places as well as pass some information on to App.jsx.
    */
    const [playing, setStatus] = useState(false);    //For setting 'state' of portfolio/react-player container in the return

    //Callback for handling play on react-player
    const handlePlay = () => {
        nav.classList.add('playing');
        midnav.classList.add('playing');
        rightnav.classList.add('playing');
        setStatus(true);        //Set portfolio to 'active'
        setPlayStatus(true);    //Let App.jsx know that vid is playing
    }

    //Callback for handling pause/end on react-player
    const handlePause = () => {
        nav.classList.remove('playing');
        midnav.classList.remove('playing');
        rightnav.classList.remove('playing');
        setStatus(false);       //Portfolio is no longer 'active'
        setPlayStatus(false);   //Let App.jsx know that vid is no longer playing
    }


    //-------------------------------------------------------------------------------------------------------------//


    /* 
        Logic for carousel.
    */

    //Maintain which 'slide' is the current slide
    const [currentSlide, setCurrentSlide] = useState(0);    //Start from the first slide
    const [playerIndexes, setPlayerIndexes] = useState([true, false, false]); //Prevent all players from playing at same time

    //Logic for the arrow clicks
    const handleClick = (direction) => {
        if (direction === "left"){
            let nextSlide = currentSlide > 0 ? currentSlide-1 : 2;
            setCurrentSlide(nextSlide);     //Set the appropriate slide to the 'active' slide
            setPlayerIndexes(idxs => 
                //If the playerIdx matches the index of the currentSlide or the nextSlide, toggle the playStatus
                idxs.map((playStatus, playerIdx) => 
                    (playerIdx === currentSlide || playerIdx === nextSlide) ? !playStatus : playStatus));
        } else {
            let nextSlide = currentSlide < 2 ? currentSlide+1 : 0
            setCurrentSlide(nextSlide);
            setPlayerIndexes(idxs => 
                idxs.map((playStatus, playerIdx) => 
                    (playerIdx === currentSlide || playerIdx === nextSlide) ? !playStatus : playStatus));
        }
    };


    //-------------------------------------------------------------------------------------------------------------//


    /* Prop for ReactPlayer instances - removes scrollbar on it */
    const config = {
        youtube: {
            embedOptions: { width:'100%', height:'99%' }
        }
    };

    /* Information to give ReactPlayers in map */
    const playerInfo = [
        { url: "https://youtu.be/L_2A09NHVJk", idx: 0},
        { url: "https://youtu.be/fvWxJ-5nM5I", idx: 1},
        { url: "https://youtu.be/COe-AzPeQaY", idx: 2},
    ];


    //-------------------------------------------------------------------------------------------------------------//


    return (
        <div className="portfolio" id="portfolio">
            <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
                {playerInfo.map(slide => (
                    <div className={"slide " + (playing && "active")}>
                        <div className={"video-container " + (playing && "active")}>
                            <ReactPlayer width="100%" height="100%"
                                config={config}
                                url={slide.url}
                                playing={vidPlaying && playerIndexes[slide.idx]}
                                light={true}                //Shows preview image instead of youtube play button
                                volume={0.5}
                                onPlay={handlePlay}         //To handle resuming a pause
                                onPause={handlePause}
                                onEnded={handlePause}
                                onClickPreview={handlePlay} //To handle playing from the light mode preview
                            /> 
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className={"arrow left " + (playing && "active")} alt="" onClick={()=>handleClick("left")}/> 
            <img src="assets/arrow.png" className={"arrow right " + (playing && "active")} alt="" onClick={()=>handleClick()}/> 
        </div>
    )
}
