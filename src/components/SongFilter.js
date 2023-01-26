import React from "react";

function SongFilter(props) {
    return (
        <div className="song-filter">
            <form>
                <select
                    className="filter-dropdown"
                    defaultValue="default"
                    name="genre"
                    onChange={props.onFilterGenre}
                >
                    <option value="default" disabled hidden>
                        Filter by Genre
                    </option>
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Pop">Pop</option>
                </select>

                <select
                    className="filter-dropdown"
                    defaultValue="default"
                    name="rating"
                    onChange={props.onFilterRating}
                >
                    <option value="default" disabled hidden>
                        Filter by rating
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
        </div>
    );
}

export default SongFilter;