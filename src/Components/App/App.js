
import React, {useState}  from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


const initialPlaylistTracks = [
  {
    name: 'Thisisaname',
    artist: 'thisisanartist',
    album: 'albumname',
    id: 666
  },
  {
    name: 'Thisisaname2',
    artist: 'thisisanartist2',
    album: 'albumname2',
    id: 667
  }
];

const initialSearchResults = [
  {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
  {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
  {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
];

function App() {
  const [playlistName,setPlaylistName] = useState('blaaaah'); 
  const [playlistTracks, setPlaylistTracks] = useState(initialPlaylistTracks);
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  

  const addTrack = (track) => {
     if(playlistTracks.find(savedTrack => savedTrack.id === track.id))
      {return} 
    
      playlistTracks.push(track);
      setPlaylistTracks({ playlistTracks })
  }

  return (
    <div>        
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
          <div className="App-playList">   
                
            <SearchResults searchResults={searchResults} onAdd ={addTrack} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} /> 
          </div>
          </div> 
    </div> 
    );
}


export default App;