import React, { Component } from "react";
import SelectedSongs from "./selectedSongs";

import "./main.css";
import SongSelector from "./songSelector";
import axios from "axios";
class Main extends Component {
  state = {
    songs: [],
    addedSongs: [],
  };

  keypressHandler = (e) => {
    let targetValue1 = e.target.value;
    if (targetValue1.length) {
      axios
        .get(`http://localhost:8081/${targetValue1}`)
        .then((res) => {
          const songs = res.data;
          this.setState({ songs });
        })
        .catch((error) => {
          console.log("No Response from server");
        });
    }
  };
  addSongHandler = (input) => {
    console.log(input);
    let newAddSong = [...this.state.addedSongs];
    console.log("the array =>", newAddSong);
    let flag = false;
    for (let key of newAddSong) {
      if (input === key) {
        console.log("is is");
        flag = true;
        break;
      }
    }
    if (!flag) {
      newAddSong.push(input);
      this.setState({ addedSongs: newAddSong });
    } else {
      let aa = this.state.addedSongs.filter((song) => song !== input);
      this.setState({ addedSongs: aa });
    }
  };
  validateHandler = () => {
    let addedSongs = this.state.addedSongs;
    if (addedSongs.length === 0) {
      alert("No Song selected!");
    } else {
      alert("Your Select Songs Are As Follow:" + addedSongs);
    }
  };
  cc = true;

  clean = () => {
    this.cc = false;
  };

  render() {
    return (
      <div className="row">
        <SongSelector
          keypressHandler={this.keypressHandler}
          validateHandler={this.validateHandler}
          addSongHandler={this.addSongHandler}
          songs={this.state.songs}
          showList={this.cc}
        />

        <SelectedSongs songs={this.state.addedSongs} clean={this.clean} />
      </div>
    );
  }
}

export default Main;
