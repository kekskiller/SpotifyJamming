import './Track.css';
import React from "react";

function Track(props) {
  const renderAction= () => {   
      if (props.isRemoval ) {
      return <button className='Track-action' onClick={removeTrack}> - </button>          
    } else {
      return <button className='Track-action' onClick={addTrack}> + </button>
    }   
  }
  const addTrack = () => {
    props.onAdd(props.track);
  }

  const removeTrack = () => {
    props.onRemove(props.track);
  }
  return(
    <div className='Track'>
      <div className='Track-information'>
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {renderAction()}
      </div>
  )
}



/* class Track extends React.Component {
    constructor (props) {
      super (props);
      this.renderAction = this.renderAction.bind(this); 
      this.addTrack = this.addTrack.bind(this);
    }
    
    
    renderAction(){   
          if (this.props.isRemoval ) {
          return <button className='Track-action'> - </button>          
        } else {
          return <button className='Track-action' onClick={this.addTrack}> + </button>
        }   
    }

    addTrack() {
      this.props.onAdd(this.props.track);
    }
    componentDidUpdate() {

    }


    render (){
        return(
            <div className='Track'>
              <div className='Track-information'>
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
              </div>
              {this.renderAction()}
          </div>
        )
    }
} */

export default Track;
