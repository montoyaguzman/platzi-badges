import React from "react";
import confLogo from '../assets/img/confLogo.svg';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src="" alt="Avatar"/>
                    <h1>Jose <br/> Montoya </h1>
                </div>
                <div className="badge_section-info">
                    <p>Front end developer</p>
                    <p>@montoyitag</p>
                </div>
                <div className="badge_footer">
                    #platziConf
                </div>
            </div>
        );
    }
}

export default Badge;