import React, { useEffect } from 'react';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faPlay, faForward, faBackward, faPause } from '@fortawesome/free-solid-svg-icons'
import Aux from '../hoc/Auxiliary'

const PlayControls = ({playSong, isPlaying, songs, currSong, setCurrSong, setSongs, audioRef}) => {

    const activeLibraryHandler = (prevNext) => {
        const newSongs = songs.map((song) => {
            if(song.id === prevNext.id) {
                return {...song, active: true}
            }
            
            else return {...song, active: false}
            
        });
        setSongs(newSongs);
    }
    
    const skipTrackHandler = async (direction) => {
        const songIndex = songs.findIndex(song => song.id === currSong.id);

        if(direction === 'skip-forward') {
            await setCurrSong(songs[(songIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(songIndex + 1) % songs.length]); 
        }
        else if(direction === 'skip-back') {
            if(songIndex - 1 < 0) {
                await setCurrSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
            }
            else {
                await setCurrSong(songs[(songIndex - 1)]);
                activeLibraryHandler(songs[(songIndex - 1) % songs.length]); 
            }
             
        }
        if(isPlaying) {
            audioRef.current.play();
        }

    }

    return(
        <Aux>
            <Icon onClick={() => skipTrackHandler('skip-back')} className="skip-back" icon={faBackward} size="2x"/>
            <Icon className="play" onClick={playSong} icon={isPlaying ? faPause : faPlay} size="2x"/>
            <Icon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" icon={faForward} size="2x"/>
        </Aux>
    );
}
    


export default PlayControls;