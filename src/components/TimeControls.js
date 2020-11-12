import React from 'react';
import Aux from '../hoc/Auxiliary'

const TimeControls = ({ songInfo, getTime, dragHandler, currSong }) => {

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return(
        <Aux>
            <p>{getTime(songInfo.currentTime)}</p>
            <div className="track" style={{background: `linear-gradient(to right, ${currSong.color[0]}, ${currSong.color[1]})`}}>
                <input min={0} max={songInfo.duration || 0} onChange={dragHandler} value={songInfo.currentTime} type="range"/>
                <div style={trackAnim} className="animate-track"></div>
            </div>
            <p>{getTime(songInfo.duration)}</p>
        </Aux>
    );
    
};

export default TimeControls;