import React from 'react';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faPlay, faForward, faBackward, faPause } from '@fortawesome/free-solid-svg-icons'
import Aux from '../hoc/Auxiliary'

const PlayControls = (props) => {

    return(
        <Aux>
            <Icon className="skip-back" icon={faBackward} size="2x"/>
            <Icon className="play" onClick={props.playSong} icon={props.isPlaying ? faPause : faPlay} size="2x"/>
            <Icon className="skip-forward" icon={faForward} size="2x"/>
        </Aux>
    );
}
    


export default PlayControls;