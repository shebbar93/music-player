import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";
import { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [navbarStatus, setNavBarStatus] = useState(false);
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdater = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage });
  };

  const onEndHandler = async () => {
    let currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className={`App`}>
      <Nav navbarStatus={navbarStatus} setNavBarStatus={setNavBarStatus} />
      <div className={`App ${navbarStatus ? "library-active" : ""}`}>
        <Song currentSong={currentSong} isPlaying={isPlaying}/>
        <Player
          songs={songs}
          setSongs={setSongs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          setCurrentSong={setCurrentSong}
        />
        <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
          navbarStatus={navbarStatus}
        />
        <audio
          onTimeUpdate={timeUpdater}
          onLoadedMetadata={timeUpdater}
          ref={audioRef}
          src={currentSong.song}
          onEnded={onEndHandler}
        ></audio>
      </div>
    </div>
  );
}

export default App;
