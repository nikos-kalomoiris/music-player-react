import React from 'react';

import PlayControls from './PlayControls'
import TimeControls from './TimeControls'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const Player = ({ currSong, isPlaying, setIsPlaying, songInfo, setSongInfo, audioRef, songs, setCurrSong, setSongs}) => {

    //Event Handlers
    const playSongHandler = () => {

        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
        else {
            audioRef.current.play();
            setIsPlaying(true);
        }
        
    }

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    return (
    <div className="player">
        
        <div className="time-control">
            <TimeControls songInfo={songInfo} getTime={getTime} dragHandler={dragHandler} currSong={currSong}/>
        </div>
        <div className="play-control">
            <PlayControls 
                playSong={playSongHandler} 
                isPlaying={isPlaying} 
                songs={songs} 
                currSong={currSong} 
                setCurrSong={setCurrSong} 
                setSongs={setSongs}
                audioRef={audioRef}/>
        </div>
    </div>
    );
}
export default Player;