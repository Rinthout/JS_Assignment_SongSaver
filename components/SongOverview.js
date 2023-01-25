import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"
import SongFilter from "./SongFilter"

class SongOverview extends React.Component {
    constructor() {
        super()
        this.state = {
            songs: [
                {
                    title: "B_Test_title",
                    artist: "B_Test_artist",
                    genre: "Test_genre1",
                    rating: "1",
                },
                {
                    title: "A_Test_title",
                    artist: "A_Test_artist",
                    genre: "Test_genre2",
                    rating: "3",
                },
                {
                    title: "C_Test_title",
                    artist: "C_Test_artist",
                    genre: "Test_genre3",
                    rating: "3",
                }
            ]
        }
    }

    addSong = (song) => {
        // do something to change the state
        this.setState((prevState) => {
            const newSong = prevState.songs.concat(song)
            return {
                songs: newSong
            }
        })
    }

    removeSong = (id) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const newList = songs.filter((song, index) => index !== id)
            return {
                songs: newList
            }
        })
    }

    filterArtist = (event) => {
        this.setState((prevState) => {
            const songs = prevState.artist
            const artist = event.target.value
            // const filteredList = songs.sort((song) => song.artist === artist);
            const filteredList = (a, b) => {
                const artistA = a.artist.toUpperCase();
                const artistB = b.artist.toUpperCase();
            
                let comparison = 0;
                if (artistA > artistB) {
                  comparison = 1;
                } else if (artistA < artistB) {
                  comparison = -1;
                }
                return comparison;
            }
            return {
                songs: filteredList
            }
        })
    }

    filterRating = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs;
            const rating = event.target.value;
            const filteredList = (a, b) => {
                const artistA = a.artist.toUpperCase();
                const artistB = b.artist.toUpperCase();
            
                let comparison = 0;
                if (artistA > artistB) {
                  comparison = 1;
                } else if (artistA < artistB) {
                  comparison = -1;
                }
                return comparison;
            }
            return {
                songs: filteredList
            }
        })
    }

    render() {
        return (
            <div className="song-overview">
                <SongForm onSubmit={this.addSong} />
                <table className="song-table">
                    <tr className="song-header">
                        <th className="song-row__song">Song</th>
                        <th className="song-row__artist">Artist</th>
                        <th className="song-row__genre">Genre</th>
                        <th className="song-row__rating">Rating</th>
                        <th className="song-row__remove">Remove</th>
                    </tr>
                    <SongList
                        className="song-list"
                        songs={this.state.songs}
                        handleClick={this.removeSong}
                    />
                    <SongFilter
                        songs={this.state.songs}
                        // onFilterArtist={this.filterArtist}
                        onFilterRating={this.filterRating}
                    />
                </table>
            </div>
        )
    }
}

export default SongOverview