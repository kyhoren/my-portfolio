import "./home.scss"
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Home() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 70,
            strings: ['"gaming warlord"', '"god gamer"', '"puzzle guy"', '"dirt diggler"',
                      '"obvious cheater"', '"blatant walls"'
                     ] 
        })

    }, []);
    
    return (
        <div className="homePage" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/stickercutout.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>creo</h3>
                    <h3><span ref={textRef}></span></h3>
                    <h3 id="after">legend</h3>
                        
                </div>
            </div>
        </div>
    )
}
