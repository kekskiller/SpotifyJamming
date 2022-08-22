import './Playlist.css';
import React from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor (props) {
        super(props);
    }
    
    
    render() {
        return(
        <div className='Playlist'>
            This is the Playlist DIV!
            <input value={'New Playlist'}/>
            <TrackList playlistTracks={this.props.playlistTracks} />
            <button className='Playlist-save'>SAVE TO SPOTIFY</button>
        </div>
        )
    }
}

export default Playlist;

