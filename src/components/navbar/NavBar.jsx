import "./navbar.scss";
import { Steam, Twitch } from '../../icons';

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="home">creo.</a>
                    
                </div>
                <div className="right">
                    <a href="https://twitch.tv/creosucks" target="_blank" rel="noreferrer"><Twitch className="icon" /></a>
                    <a href="https://www.steamcommunity.com/id/creolegend" target="_blank" rel="noreferrer"><Steam className="icon" /></a>
                </div>
            </div>
        </div>
    )
}

