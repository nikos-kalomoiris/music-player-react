import React from 'react';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import Library from './Library';

const Nav = ({ libraryStatus, setLibraryStatus}) => {

    return (
        <nav>
            <h1>Chill Vibes</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <Icon className="music-note" icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;