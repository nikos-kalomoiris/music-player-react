import React from 'react';
import Aux from '../hoc/Auxiliary'

const TimeControls = ({ songInfo, getTime, dragHandler }) => (
    <Aux>
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0} max={songInfo.duration || 0} onChange={dragHandler} value={songInfo.currentTime} type="range"/>
        <p>{getTime(songInfo.duration)}</p>
    </Aux>
    
);

export default TimeControls;