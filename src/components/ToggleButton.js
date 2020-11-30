import React from 'react';

const ToggleButton = ({ toggled, click }) => {
 
    return(
        <div className={`toggle ${toggled ? "night": ""}`} onClick={click}>
            <div className="notch">
                <div className="crater"></div>
                <div className="crater"></div>
            </div>
            <div>
                <div className="shape sm"></div>
                <div className="shape sm"></div>
                <div className="shape md"></div>
                <div className="shape lg"></div>
            </div>
        </div>
    );
}

export default ToggleButton;