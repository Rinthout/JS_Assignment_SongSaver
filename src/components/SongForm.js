import React from "react"

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Song",
            artist: "Artist",
            genre: "Genre",
            rating: "Rating",
        }
    }

    render() {
        const onInputTitle = event => {
            this.setState({
                title: event.target.value,
            })
        }

        const onInputArtist = event => {
            this.setState({
                artist: event.target.value,
            })
        }

        const onSelectGenre = event => {
            this.setState({
                genre: event.target.value,
            })
        }

        const onSelectRating = event => {
            this.setState({
                rating: event.target.value,
            })
        }

        const onSubmit = event => {
            event.preventDefault();
            this.props.onSubmit(this.state)
        }

        return (
            <div>
                <form onSubmit={onSubmit} className="song-form">
                    <input
                        className="form-item1"
                        placeholder={this.state.title}
                        type="text"
                        onInput={onInputTitle}
                    />

                    <input
                        className="form-item1"
                        placeholder={this.state.artist}
                        type="text"
                        onInput={onInputArtist}
                    />

                    <select
                        className="form-item2"
                        defaultValue="default"
                        name="genre"
                        onChange={onSelectGenre}
                    >
                        <option value="default" disabled hidden>{this.state.genre}</option>
                        <option value="rock">Rock</option>
                        <option value="jazz">Jazz</option>
                        <option value="pop">Pop</option>
                    </select>

                    <select
                        className="form-item2"
                        defaultValue="default"
                        name="rating"
                        onChange={onSelectRating}
                    >
                        <option value="default" disabled hidden>{this.state.rating}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button className="add-button" type="submit" value="AddSong">Add<br />Song</button>
                </form>
            </div>
        )
    }
}

export default SongForm
