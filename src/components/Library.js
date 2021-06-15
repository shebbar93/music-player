import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  navbarStatus,
}) => {
  return (
    <div className={`library-container ${navbarStatus ? "active-nav" : ""}`}>
      <h2>Song Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            currentSong={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
