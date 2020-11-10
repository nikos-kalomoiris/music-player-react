import React from 'react';

const Song = ({ currSong }) => (
    <div className="song-container">
        <img src={currSong.cover} alt="Album image"/>
        <h2 >{currSong.name}</h2>
        <h3>{currSong.artist}</h3>
    </div>
)

export default Song;