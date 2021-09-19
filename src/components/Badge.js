import React from "react";
import confLogo from '../assets/img/confLogo.svg';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter
        } = this.props;

        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src={avatarUrl} alt="Avatar"/>
                    <h1>{firstName} <br/> {lastName} </h1>
                </div>
                <div className="badge_section-info">
                    <p>{jobTitle}</p>
                    <p>{twitter}</p>
                </div>
                <div className="badge_footer">
                    #platziConf
                </div>
            </div>
        );
    }
}

export default Badge;