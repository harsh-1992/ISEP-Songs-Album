import React, { Component } from "react";

const SelectedSongs = (props) => {
  return (
    <React.Fragment>
      <h4> Added Songs Are Here:</h4>
      <div className="column addSong">
        <ul className="addSong">
          {props.songs.map((song) => {
            return <li key={song}>{song}</li>;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SelectedSongs;
