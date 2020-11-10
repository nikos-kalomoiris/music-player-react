import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrSong, setIsPlaying, isPlaying, audioRef, setSongs, libraryStatus }) => {

    return(
        <div className={`library ${libraryStatus? "library-active" : ""}`} > 
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => {
                    return (
                        <LibrarySong 
                            key={song.id} 
                            currSong={song} 
                            setCurrSong={setCurrSong} 
                            setIsPlaying={setIsPlaying} 
                            isPlaying={isPlaying}
                            audioRef={audioRef}
                            songs={songs}
                            setSongs={setSongs}/>
                    )
                })}
            </div>
        </div>
    );
}
    


export default Library;