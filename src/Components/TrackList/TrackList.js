import './TrackList.css';
import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const tracksListed = this.props.tracks.map((track)=> {
        //    return(
        //       <Track track={track} key={track.id} onAdd={this.props.onAdd} />
        //    )
        //});

        return(
            <div className='TrackList'>
            lala

            {
                this.props.searchResults.map(track => <div>{track.name}</div>)
            }
            </div>
        )
    }
}

export default TrackList;
