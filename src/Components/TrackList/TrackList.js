import "./TrackList.css"
import React from "react"
import Track from "../Track/Track"

class TrackList extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="TrackList">
        {this.props.tracksOnList.map((track) => (
          <Track
            track={track}
            key={track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    )
  }
}

export default TrackList
