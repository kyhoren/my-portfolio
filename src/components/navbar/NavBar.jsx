import "./navbar.scss";
import { Steam, Twitch } from '../../icons';

export default function NavBar() {

    return (
        <div className="navbar" id="nav">  {/* adding active changes color */}
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="home">creo.</a>
                </div>
                <div className="middle" id="midnav">  {/* adding active changes color */}
                    <a href="#portfolio" className="links"> PORTFOLIO </a>
                    <a href="#clips" className="links"> CLIPS </a>
                    <a href="#stats" className="links"> STATS </a>
                    <a href="#reviews" className="links"> REVIEWS </a>
                </div>
                <div className="right" id="rightnav"> {/* adding active changes color */}
                    <a href="https://twitch.tv/creosucks" target="_blank" rel="noreferrer"><Twitch className="icon" /></a>
                    <a href="https://www.steamcommunity.com/id/creolegend" target="_blank" rel="noreferrer"><Steam className="icon" /></a>
                </div>
            </div>
        </div>
    )
}

