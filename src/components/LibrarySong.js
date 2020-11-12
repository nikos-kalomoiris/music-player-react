import React from 'react';

const LibrarySong = ({ currSong, setCurrSong, isPlaying, audioRef, songs, setSongs }) => {

    const selectSongHandler = async () => {
        await setCurrSong(currSong);
        const newSongs = songs.map((song) => {
            if(song.id === currSong.id) {
                return {...song, active: true}
            }
            
            else return {...song, active: false}
            
        });
        setSongs(newSongs);
        if(isPlaying) audioRef.current.play();
    }

    return(
        <div className={`library-song ${currSong.active? 'selected': ""}`} onClick={selectSongHandler}>
            <img src={currSong.cover} alt="Album image"/>
            <div className="song-description">
                <h3 >{currSong.name}</h3>
                <h4>{currSong.artist}</h4>
            </div>
        </div>
    )
}


export default LibrarySong;