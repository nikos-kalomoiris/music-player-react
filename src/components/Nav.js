import React from 'react';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as CupcakeIcon} from '../assets/cup-cake.svg'

const Nav = ({ libraryStatus, setLibraryStatus}) => {

    return (
        <nav>
            <h1><CupcakeIcon width="40px" height="40px" style={{verticalAlign: "-20%"}}/> Cakeplayer</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <Icon className="music-note" icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;