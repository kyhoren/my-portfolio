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


    const style = {
        // paddingTop: '0.5%',
        backgroundColor: 'black',
        overflow:'hidden'
    };

    const config = {
        youtube: {
            embedOptions: { width:'100%', height:'99%' }
        }
    };

    //-------------------------------------------------------------------------------------------------------------//

    return (
        <div className={"portfolio " + (playing && "active")} id="portfolio">
            <div className={"container " + (playing && "active")}>
                <ReactPlayer width="100%" height="100%" //controls
                className="player"
                // style={style}
                config={config}
                // url="https://youtu.be/L_2A09NHVJk"
                // url="https://youtu.be/fvWxJ-5nM5I"
                url="https://youtu.be/COe-AzPeQaY"
                playing={vidPlaying}
                volume={0.5}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause} /> 
            </div>
        </div>
    )
}
