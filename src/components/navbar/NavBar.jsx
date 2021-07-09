import "./navbar.scss";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="home">creo.</a>
                    
                </div>
                <div className="right">
                    <SocialIcon url="https://twitch.tv/creosucks" target="_blank" /*bgColor="#ffffff"*/ fgColor="#fff" style={{height: 50, width: 50, marginRight: 5}}/>
                    <SocialIcon url="https://www.youtube.com/channel/UCWhmuvN0Y062Kjo7OZHDbwQ" target="_blank" /*bgColor="#ffffff"*/ fgColor="#fff" style={{height: 50, width: 50, marginRight: 5}}/>
                    <SocialIcon url="https://steamcommunity.com/id/creolegend" target="_blank" /*bgColor="#ffffff"*/ fgColor="#fff" style={{height: 50, width: 50}}/>
                </div>
            </div>
        </div>
    )
}

