import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
// import {playAudio} from '../util'

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
  setCurrentSong,
}) => {
  
  const activeLibraryHandler = (nextPrev) => {
    const newSongsList = songs.map((x) =>
      x.id !== nextPrev.id
        ? {
            ...x,
            active: false,
          }
        : {
            ...x,
            active: true,
          }
    );
    setSongs(newSongsList);
  };
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const humanReadTimeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    const currentTime = e.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };
  const changeSong = async (direction) => {
    let currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    } else {
      if (currentIndex !== 0) {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
      } else {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      }
    }
    if(isPlaying)  audioRef.current.play();
  };
  
  const trackAnimation = {
    transform: `translatex(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className='player-container'>
      <div className='timeControl-container'>
        <p>{humanReadTimeFormat(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right,${currentSong.colors[0]}, ${currentSong.colors[1]})`,
          }}
          className='track'
        >
          <input
            type='range'
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          ></input>
          <div style={trackAnimation} className='animate-track'></div>
        </div>

        <p>
          {songInfo.duration ? humanReadTimeFormat(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className='playerControl-container'>
        <FontAwesomeIcon
          className='skip-back'
          onClick={() => changeSong("previous")}
          icon={faAngleLeft}
          size='2x'
        />
        <FontAwesomeIcon
          className='play'
          icon={isPlaying ? faPause : faPlay}
          size='2x'
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => changeSong("forward")}
          className='skip-forward'
          icon={faAngleRight}
          size='2x'
        />
      </div>
    </div>
  );
};

export default Player;
