import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends React.Component {
    constructor() {
        super()
        this.state = {
            songs: [
                {
                    title: "Test_title1",
                    artist: "Test_atist1",
                    genre: "Test_genre1",
                    rating: "Test_rating1",
                },
                {
                    title: "Test_title2",
                    artist: "Test_atist2",
                    genre: "Test_genre2",
                    rating: "Test_rating2",
                },
            ]
        }
    }

    addSong = (song) => {
        // do something to change the state
        this.setState((prevState) => {
            const newSong = prevState.songs.concat(song)
            return {
                songs: newSong,
            }
        })
    }

    removeSong = (id) => {
        this.setState((prevState) => {
          const songs = prevState.songs;
          const newList = songs.filter((song, index) => index !== id);
          return {
            songs: newList,
          };
        });
      };

    render() {
        return (
            <div className="song-overview">
                <SongForm onSubmit={this.addSong} />
                <table className="song-table">
                    <tr className="song-header">
                        <th className="song-column">Song</th>
                        <th className="artist-column">Artist</th>
                        <th className="genre-column">Genre</th>
                        <th className="rating-column">Rating</th>
                        <th className="del-column">Remove</th>
                    </tr>
                <SongList
                    className="song-list"
                    songs={this.state.songs}
                    handleClick={this.removeSong}
                />
                </table>
            </div>
        )
    }
}

export default SongOverview