import React, { useState, useRef } from 'react';
import './Styles/App.scss'
//Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//Data
import data from './data';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  })

  //Ref
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent/roundedDuration)*100);
    console.log(animationPercentage);
    setSongInfo({
        currentTime: current,
        duration: duration,
        animationPercentage: animationPercentage
    });
  }

  const songEndHandler = async () => {
    const songIndex = songs.findIndex(song => song.id === currSong.id);
    await setCurrSong(songs[(songIndex + 1) % songs.length]);  
    audioRef.current.play();
  }

  return (
    <div className={`app ${libraryStatus ? 'library-pressed': ''}`} >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currSong={ currSong }/>
      <Player 
        currSong={ currSong } 
        isPlaying={isPlaying} 
        setIsPlaying={ setIsPlaying }
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}/>
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
            onEnded={songEndHandler}
            />
    </div>
  );
}

export default App;
