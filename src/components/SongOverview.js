import React from "react"
import SongFilter from "./SongFilter"
import SongForm from "./SongForm"
import SongList from "./SongList"
import SongSort from "./SongSort"

class SongOverview extends React.Component {
    constructor() {
        super()
        this.state = {
            songs: [
                {
                    title: "A_Test_title",
                    artist: "Bon Jovi",
                    genre: "Rock",
                    rating: "2",
                },
                {
                    title: "D_Test_title",
                    artist: "Abba",
                    genre: "Pop",
                    rating: "3",
                },
                {
                    title: "C_Test_title",
                    artist: "Queen",
                    genre: "Rock",
                    rating: "1",
                },
                {
                    title: "A_Test_title",
                    artist: "U2",
                    genre: "Rock",
                    rating: "4",
                },
                {
                    title: "E_Test_title",
                    artist: "Dave Bruback",
                    genre: "Jazz",
                    rating: "4",
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

    sortRating = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const rating = event.target.value
            const sortedList = songs.sort(function sortStars(a, b) {
                if (a.rating > b.rating) return 1
                else if (b.rating > a.rating) return -1
                return 0
            })
            return {
                songs: sortedList
            }
        })
    }

    sortArtist = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const artist = event.target.value
            const sortedList = songs.sort(function fromAtoZ(a, b) {
                if (a.artist.toUpperCase() > b.artist.toUpperCase()) return 1
                else if (a.artist.toUpperCase() < b.artist.toUpperCase()) return -1
                return 0;
            })
            return {
                songs: sortedList,
            }
        })
    }

    sortTitle = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const title = event.target.value
            const sortedList = songs.sort(function fromAtoZ(a, b) {
                if (a.title.toUpperCase() > b.title.toUpperCase()) return 1
                else if (a.title.toUpperCase() < b.title.toUpperCase()) return -1
                return 0;
            })
            return {
                songs: sortedList
            }
        })
    }

    filterRating = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs;
            const rating = event.target.value;
            const filteredList = songs.filter((song) => song.rating === rating);
            return {
                songs: filteredList,
            };
        });
    };

    filterGenre = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs;
            const genre = event.target.value;
            const filteredList = songs.filter((song) => song.genre === genre);
            return {
                songs: filteredList,
            };
        });
    };

    render() {
        return (
            <div>
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
                </table>
                <SongSort
                    songs={this.state.songs}
                    onSortArtist={this.sortArtist}
                    onSortRating={this.sortRating}
                    onSortTitle={this.sortTitle}
                />
                <SongFilter
                    songs={this.state.songs}
                    onFilterGenre={this.filterGenre}
                    onFilterRating={this.filterRating}
                />
            </div>
        )
    }
}

export default SongOverview