import React from "react"

function SongSort(props) {
  return (
    <div className="song-sort">
      <button
        className="button-sort"
        type="submit"
        value="title"
        onClick={props.onSortTitle}
      > Song Title<br />A to Z
      </button>
      <button
        className="button-sort"
        type="submit"
        value="artist"
        onClick={props.onSortArtist}
      > Artist<br />A to Z
      </button>
      <button
        className="button-sort"
        type="submit"
        value="stars"
        onClick={props.onSortRating}
      > Stars<br />1 to 5
      </button>
    </div>
  )
}

export default SongSort
