import './TrackList.css';
import React from 'react';
import Track from '../Track/Track';

/* function TrackList(props) {


    return(
        <div className='TrackList'>
            { props.tracksOnList.map(track => <Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={false}/>) }
        </div>
    )
    
} */

class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='TrackList'>
                {this.props.tracksOnList.map(track => 
                    <Track 
                        track={track} 
                        key={track.id} 
                        onAdd={this.props.onAdd} 
                        onRemove={this.props.onRemove} 
                        isRemoval={this.props.isRemoval}
                    />
                    
                )}
            </div>
        )
    }
} 

export default TrackList; 
