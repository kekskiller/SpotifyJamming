import "./SearchResults.css"
import React from "react"
import Tracklist from "../TrackList/TrackList"

class SearchResults extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>RESULTS</h2>
        <Tracklist tracksOnList={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
      </div>
    )
  }
}

export default SearchResults
