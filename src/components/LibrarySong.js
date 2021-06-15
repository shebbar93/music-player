import React from "react";
const LibrarySong = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const selectSong = async () => {
    await setCurrentSong({
      ...currentSong,
      active: true,
    });
    const newSongsList = songs.map((x) =>
      x.id !== currentSong.id
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
    //playAudio(isPlaying, audioRef);
    if(isPlaying)  audioRef.current.play();
    
  };
  return (
    <div
      className={`library-song-container ${currentSong.active && "selected"}`}
      onClick={selectSong}
    >
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <div className='song-description'>
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
