import React, { useState } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [forwardRate, setForwardRate] = useState(10); // Valeur par défaut pour avance rapide
  const [backwardRate, setBackwardRate] = useState(10); // Valeur par défaut pour retour rapide
  const [seekTime, setSeekTime] = useState(0); // Champ de sélection pour le temps de recherche
  const [player, setPlayer] = useState(null);

  const onPlayerReady = (event) => {
    setPlayer(event.target);
    event.target.setPlaybackRate(playbackRate); // Assurez-vous que la vitesse initiale est définie
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };



  const handleSkip = (seconds) => {
    const currentTime = player.getCurrentTime();
    player.seekTo(currentTime + seconds, true);
  };

  const handleSeekTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setSeekTime(newTime);
    player.seekTo(newTime, true);
  };



  const handleForwardRate = (e) => {
    const newRate = parseInt(e.target.value, 10);
    setForwardRate(newRate);
  };

  const handleBackwardRate = (e) => {
    const newRate = parseInt(e.target.value, 10);
    setBackwardRate(newRate);
  };

  return (
    <>
      <header className="headerBox">
        <div className='fecu'>Feliz Cumpleaños </div>
        <div className="head"> Anita</div>
      </header>
      <main className='main'>
        <div className='mensaje'>De la parte de tus seres queridos con mucho amor</div>
        <div className="container">
          <YouTube
            videoId="alDg43DA2HU" // Remplacez par l'ID de votre vidéo YouTube
            opts={{
              height: '390',
              width: '640',
              playerVars: {
                autoplay: 0,
              },
            }}
            onReady={onPlayerReady}
          />
          <div className="controls">
            <select value={backwardRate} onChange={handleBackwardRate}>
              <option value={10}>10sec</option>
              <option value={20}>20sec</option>
              <option value={50}>50sec</option>
              <option value={60}>1min</option>
              <option value={120}>2min</option>
              <option value={180}>3min</option>
            </select>
            <button onClick={() => handleSkip(-backwardRate)}><FontAwesomeIcon icon={faArrowRotateLeft} /> </button>

            <button onClick={handlePlayPause}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>

            <button onClick={() => handleSkip(forwardRate)}><FontAwesomeIcon icon={faArrowRotateRight} /></button>
            <select value={forwardRate} onChange={handleForwardRate}>
              <option value={10}>10sec</option>
              <option value={20}>20sec</option>
              <option value={50}>50sec</option>
              <option value={60}>1min</option>
              <option value={120}>2min</option>
              <option value={180}>3min</option>
            </select>
            <label>
             
            </label>
        
            <label>
            Los mensajes:
              <select value={seekTime} onChange={handleSeekTimeChange}>
                <option value={0}>Tía Rossy y Tío Andres</option>
                <option value={11}>Cristian y Dayana</option>
                <option value={17}>Don Robert</option>
                <option value={36}>Ginger</option>
                <option value={52}>Familia de Quito</option>
                <option value={64}>Ricci</option>
                <option value={71}>Tío Cecar</option>
                <option value={77}>Cheche y Tía Rosana</option>
                <option value={87}>Juan Pablo y su familia</option>
                <option value={96}>Tía Ana Emilia y Renato</option> 
                 <option value={152}>Don Didier</option>  
                 <option value={167}>Dona Raquel</option>  
                 <option value={174}>Valeria y Elisabeth</option>
                 <option value={207}>Andreita</option>
                 <option value={230}>Victor</option>
                <option value={272}>David</option> 
                 <option value={293}>Amiga Manaba</option>  
                 <option value={339}>Santiago</option>  
                 <option value={359}>Tiffany</option>
                 <option value={407}>Dona Loly</option>
                 <option value={453}>Lenin</option>
                 <option value={474}>Manuelita</option>
                 <option value={484}>Murya</option>
                 <option value={507}>Edwin y Lolita</option>
                 <option value={566}>Belen</option>
                 <option value={579}>Cindy</option>
                 <option value={601}>Mafer</option>
                 <option value={638}>Analia</option>
                 <option value={659}>Dona Ceci</option>
                 <option value={668}>Dona Vicky</option>
                 <option value={698}>Federico y Romeo</option>
                 <option value={717}>Amiga de Manabi</option>
                 <option value={740}>Anita Victoria</option>
                 <option value={746}>Tito</option>
                 <option value={755}>Max</option>
                 <option value={758}>Tiana</option>
                 <option value={767}>La Embajadora Esparsa y Bruno</option>
                 <option value={817}>Roberto</option>
                 <option value={833}>Ana Ligia</option>
                 <option value={867}>Tifany</option>
              </select>
            </label>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
