import React from "react"

function SongFilter(props) {
  return (
    <div className="songfilter">
      <form>
        <select
          className="filter-select-artist"
          defaultValue="default"
          name="artist"
          
        >
          <option value="default">Filter by Artist</option>
          <option onChange={props.filterArtist} value="AtoZ">from A to Z</option>
          <option value="ZtoA">from Z to A</option>
        </select>
        <select
          className="filter-select-rating"
          defaultValue="default"
          name="rating"
          onChange={props.filterRating}
        >
          <option value="default">Filter by Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </form>
    </div>
  )
}

export default SongFilter
