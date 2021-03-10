import React, { Component } from "react";

class SoundSelector extends Component {
  state = {
    listClass: "",
    showList: this.props.showList,
  };

  addBorder = () => {
    this.setState({ listClass: "list listDiv" });
  };

  render() {
    return (
      <div className="listMaster column">
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Write you song name here"
                  className="inputText"
                  type="text"
                  name="song"
                  onKeyUp={this.props.keypressHandler}
                  onKeyPress={this.addBorder}
                />
                <button onClick={this.props.validateHandler}> Validate</button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                {this.state.showList == true && (
                  <div className={this.state.listClass}>
                    {this.props.songs.map((song) => {
                      return (
                        <div
                          onClick={() => this.props.addSongHandler(song)}
                          key={song}
                        >
                          <span className="item">{song}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SoundSelector;
