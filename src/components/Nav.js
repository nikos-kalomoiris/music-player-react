import React from 'react';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as CupcakeIcon} from '../assets/cup-cake.svg'
import ToggleButton from './ToggleButton';

const Nav = ({ libraryStatus, setLibraryStatus, toggled, click}) => {

    return (
        <nav>
            <h1><CupcakeIcon width="40px" height="40px" style={{verticalAlign: "-20%"}}/> Cakeplayer</h1>
            <ToggleButton toggled={toggled} click={click}/>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <Icon className="music-note" icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;