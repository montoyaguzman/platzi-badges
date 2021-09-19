import React from "react";
import confLogo from '../assets/img/confLogo.svg'

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div>
                    <img src="" alt="Avatar"/>
                    <h1>Jose <br/> Montoya </h1>
                </div>
                <div>
                    <p>Front end developer</p>
                    <p>@montoyitag</p>
                    <p>#platziConf</p>
                </div>
            </div>
        );
    }
}

export default Badge;