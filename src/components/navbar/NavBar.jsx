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
                    <Twitch className="icon" />
                    <Steam className="icon" />
                </div>
            </div>
        </div>
    )
}

