import React, { useState, useRef } from 'react';
import './Styles/App.scss'
//Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//Data
import data from './util';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  //Ref
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
        currentTime: current,
        duration: duration
    });
  }

  return (
    <div className="App" >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currSong={ currSong }/>
      <Player 
        currSong={ currSong } 
        isPlaying={isPlaying} 
        setIsPlaying={ setIsPlaying }
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        timeUpdateHandler={timeUpdateHandler}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}/>
      <Library 
        songs={songs} 
        setCurrSong={setCurrSong} 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        audioRef={audioRef}
        setSongs={setSongs}
        libraryStatus={libraryStatus}/>
      <audio 
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef} 
            src={currSong.audio}
            />
    </div>
  );
}

export default App;
